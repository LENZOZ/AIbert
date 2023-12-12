import React, { useState, useEffect } from 'react';
import ReactECharts from 'echarts-for-react';

const GraphicBar = () => {
  const option = {
    title: {
      text: 'Progreso'
    },
    tooltip: {},
    legend: {
      data: ['Objetivo de aprendizaje 1']
    },
    radar: {
      // shape: 'circle',
      indicator: [
          { name: 'Indicador de evaluacion 1', max: 100},
          { name: 'Indicador de evaluacion 2', max: 100},
          { name: 'Indicador de evaluacion 3', max: 100},
          { name: 'Indicador de evaluacion 4', max: 100},
          { name: 'Indicador de evaluacion 5', max: 100},
          { name: 'Indicador de evaluacion 6', max: 100},
          { name: 'Indicador de evaluacion 7', max: 100},
          { name: 'Indicador de evaluacion 8', max: 100}
      ]
    },
    series: [{
      name: 'Comparador de avance',
      type: 'radar',
      // areaStyle: {normal: {}},
      data : [
        {
          value : [70, 100, 80, 50, 45, 90, 20, 90],
          name : 'Objetivo de aprendizaje 1'
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
    maskColor: 'rgba(194, 88, 86, 0.3)',
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