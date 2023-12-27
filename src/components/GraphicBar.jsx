import React, { useState, useEffect } from 'react';
import ReactECharts from 'echarts-for-react';
import { firestore } from './firebaseConfig'; 
import { doc, getDoc, collection, getDocs } from 'firebase/firestore';

const GraphicBar = ({ uid }) => {
  const [option, setOption] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProgressData = async () => {
      if (!uid) return;

      try {
        // Consultar los objetivos de aprendizaje
        const progresoRef = collection(firestore, `Usuarios/${uid}/Progreso`);
        const progresoSnap = await getDocs(progresoRef);
        const objetivos = progresoSnap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        
        // Construir indicadores para la gráfica
        const indicators = objetivos.map(obj => ({ name: obj.nombre, max: 100 }));

        // Consultar datos de diagnóstico
        const diagnosticos = await Promise.all(
          objetivos.map(async obj => {
            const diagRef = doc(firestore, `Usuarios/${uid}/Diagnostico/${obj.id}`);
            const diagSnap = await getDoc(diagRef);
            return diagSnap.exists() ? Math.round(diagSnap.data().resultado) : 0;
          })
        );

        // Consultar datos de nivel actual
        const nivelesActuales = await Promise.all(
          objetivos.map(async obj => {
            const indicadoresRef = collection(firestore, `Usuarios/${uid}/Progreso/${obj.id}/Indicadores`);
            const indicadoresSnap = await getDocs(indicadoresRef);
            const indicadores = indicadoresSnap.docs.map(doc => doc.data());

            // Calcular el promedio de avance para cada objetivo
            const total = indicadores.reduce((acc, ind) => acc + (ind.total_aciertos / ind.total_intentos * 100), 0);
            return indicadores.length ? Math.round(total / indicadores.length) : 0;
          })
        );

        // Construir opciones para la gráfica
        const newOption = {
          title: { text: 'Progreso' },
          tooltip: {},
          legend: { data: ['Diagnostico', 'Nivel Actual'] },
          radar: { indicator: indicators },
          series: [{
            name: 'Comparador de avance',
            type: 'radar',
            data: [
              { value: diagnosticos, name: 'Diagnostico' },
              { value: nivelesActuales, name: 'Nivel Actual' }
            ]
          }]
        };

        setOption(newOption);
        setIsLoading(false);
      } catch (error) {
        console.error('Error al obtener datos de progreso:', error);
        setIsLoading(false);
      }
    };

    fetchProgressData();
  }, [uid]);

  const loadingOption = {
    text: 'Cargando...',
    color: '#4413c2',
    textColor: '#270240',
    maskColor: 'rgba(79, 89, 255, 0.3)',
    zlevel: 0
  };

  function onChartReady(echarts) {
    if (!isLoading) {
      echarts.hideLoading();
    }
  }

  return <ReactECharts
    option={option}
    style={{ height: 400 }}
    onChartReady={onChartReady}
    loadingOption={loadingOption}
    showLoading={isLoading}
  />;
};

export default GraphicBar;
