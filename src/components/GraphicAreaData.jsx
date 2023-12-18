import React from 'react';
import ReactECharts from 'echarts-for-react';

const GraphicAreaData = (data, title, datatitle ) => {
  const option = {
    title: {
      text: title
    },
    tooltip : {
      trigger: 'axis'
    },
    legend: {
      data: datatitle
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }},
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
      }],
    yAxis : [
      {
        type : 'value'
      }
    ],
    series : [data.map((obj, i) => {
        return ({
            name:obj.name,
            type:'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data: obj.values
        });
      })]
  };
  return <ReactECharts
    option={option}
    style={{ height: 400 }}
  />;
};

export default GraphicAreaData;

