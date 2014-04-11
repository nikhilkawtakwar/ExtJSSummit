Ext.define('WeatherPoint', {
  extend: 'Ext.data.Model',
  fields: ['temperature', 'date']
});

var store = Ext.create('Ext.data.Store', {
  model: 'WeatherPoint',
  data: [
    { temperature: 8, date: new Date(2011, 1, 1, 8) },
    { temperature: 63, date: new Date(2011, 1, 1, 9) },
    { temperature: 73, date: new Date(2011, 1, 1, 10) },
    { temperature: 78, date: new Date(2011, 1, 1, 11) },
    { temperature: 81, date: new Date(2011, 1, 1, 12) }
  ]
});


Ext.onReady(function(){
  Ext.create('Ext.chart.Chart', {
    renderTo: Ext.getBody(),
    width: 400,
    height: 300,
    store: store,
    axes: [
      {
        title: 'Temperature',
        type: 'Numeric',
        position: 'left',
        fields: ['temperature'],
        minimum: 0,
        maximum: 100,
        grid: {
          odd: {
            opacity: 1,
            fill: '#ddd',
            stroke: '#bbb',
            'stroke-width': 1
          }
        }
      },
      {
        title: 'Time',
        type: 'Time',
        position: 'bottom',
        fields: ['date'],
        dateFormat: 'ga'
      }],

    series: [
      {
        type: 'line',
        xField: 'date',
        yField: 'temperature'
      }
    ]
  });




});