import React from 'react';
import ReactECharts from 'echarts-for-react';

const GraphicArea = () => {
  const option = {
    title: {
      text: 'Preguntas correctas por indicador de evaluacion'
    },
    tooltip : {
      trigger: 'axis'
    },
    legend: {
      data: ['Objetivo de aprendizaje 1']
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis : [
      {
        type : 'category',
        boundaryGap : false,
        data : ['lunes','martes','miercoles','jueves','viernes','sabado','domingo']
      }
    ],
    yAxis : [
      {
        type : 'value'
      }
    ],
    series : [
      {
        name:'Indicador de evaluacion 1',
        type:'line',
        stack: '总量',
        areaStyle: {normal: {}},
        data:[2, 3, 1, 2, 0, 0, 5]
      },
      {
        name:'Indicador de evaluacion 2',
        type:'line',
        stack: '总量',
        areaStyle: {normal: {}},
        data:[2, 2, 4, 3, 0, 0, 1]
      },
      {
        name:'Indicador de evaluacion 3',
        type:'line',
        stack: '总量',
        areaStyle: {normal: {}},
        data:[4, 3, 2, 5, 1, 1, 3]
      },
      {
        name:'Indicador de evaluacion 4',
        type:'line',
        stack: '总量',
        areaStyle: {normal: {}},
        data:[0, 0, 0, 1, 3, 3, 1]
      },
      {
        name:'Indicador de evaluacion 5',
        type:'line',
        stack: '总量',
        areaStyle: {normal: {}},
        data:[1, 0, 3, 2, 1, 3, 2]
      },
      {
        name:'Indicador de evaluacion 6',
        type:'line',
        stack: '总量',
        areaStyle: {normal: {}},
        data:[1, 2, 0, 2, 2, 5, 3]
      },
      {
        name:'Indicador de evaluacion 7',
        type:'line',
        stack: '总量',
        areaStyle: {normal: {}},
        data:[0, 0, 0, 1, 3, 4, 2]
      },
      {
        name:'Indicador de evaluacion 8',
        type:'line',
        stack: '总量',
        areaStyle: {normal: {}},
        data:[0, 0, 0, 1, 2, 6, 3]
      }
    ]
  };

  return <ReactECharts
    option={option}
    style={{ height: 400 }}
  />;
};

export default GraphicArea;