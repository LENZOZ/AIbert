import React, { useState, useEffect } from 'react';
import ReactECharts from 'echarts-for-react';

const GraphicBarData = ({title, data}) => {
  const option = {
    title: {
      text: title
    },
    tooltip: {},
    legend: {
      data: title
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
          value : data,
          name : title
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

export default GraphicBarData;
