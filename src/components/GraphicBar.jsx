import React, { useState, useEffect } from 'react';
import ReactECharts from 'echarts-for-react';

const GraphicBar = ({title, data}) => {
  const option = {
    title: {
      text: 'Progreso'
    },
    tooltip: {},
    legend: {
      data: ['Diagnostico','Nivel Actual']
    },
    radar: {
      // shape: 'circle',
      indicator: [
          { name: 'Objetivo de aprendizaje 1', max: 100},
          { name: 'Objetivo de aprendizaje 2', max: 100},
          { name: 'Objetivo de aprendizaje 3', max: 100},
          { name: 'Objetivo de aprendizaje 4', max: 100},
          { name: 'Objetivo de aprendizaje 5', max: 100},
          { name: 'Objetivo de aprendizaje 6', max: 100},
          { name: 'Objetivo de aprendizaje 7', max: 100},
          { name: 'Objetivo de aprendizaje 8', max: 100}
      ]
    },
    series: [{
      name: 'Comparador de avance',
      type: 'radar',
      // areaStyle: {normal: {}},
      data : [
        {
          value : [60, 80, 50, 40, 25, 40, 10, 20],
          name : 'Diagnostico'
        },{
          value : [70, 100, 80, 50, 45, 90, 20, 90],
          name : 'Nivel Actual'
        }
      ]
    }]
  };

  let timer;

  useEffect(() => {
    return () => clearTimeout(timer);
  });

  const loadingOption = {
    text: 'Cargando...',
    color: '#4413c2',
    textColor: '#270240',
    maskColor: 'rgba(79, 89, 255, 0.3)',
    zlevel: 0
  };

  function onChartReady(echarts) {
    timer = setTimeout(function() {
      echarts.hideLoading();
    }, 1000);
  }

  return <ReactECharts
    option={option}
    style={{ height: 400 }}
    onChartReady={onChartReady}
    loadingOption={loadingOption}
    showLoading={true}
  />;
};

export default GraphicBar;