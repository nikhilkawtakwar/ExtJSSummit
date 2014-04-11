function createSimpleForm() {
  Ext.create('Ext.form.Panel', {
    url: 'google.com',
    renderTo: document.body,
    frame: true,
    title: 'Movie Information Form',
    width: 350,
    bodyPadding: 10,
    items: [
      {
        xtype: 'textfield',
        fieldLabel: 'Title',
        name: 'title'
      },
      {
        xtype: 'textfield',
        fieldLabel: 'Director',
        name: 'director'
      },
      {
        xtype: 'datefield',
        fieldLabel: 'Released',
        name: 'released'
      }
    ]
  });
}

Ext.onReady(function () {
  createSimpleForm();
});


/*

Ext.create('Ext.form.Panel', {
  renderTo: Ext.getBody(),
  width: 300,
  bodyPadding: 10,
  title: 'Dates',
  items: [{
    xtype: 'datefield',
    anchor: '100%',
    fieldLabel: 'From',
    name: 'from_date',
    maxValue: new Date()  // limited to the current date or prior
  }, {
    xtype: 'datefield',
    anchor: '100%',
    fieldLabel: 'To',
    name: 'to_date',
    value: new Date()  // defaults to today
  }]
});

  */