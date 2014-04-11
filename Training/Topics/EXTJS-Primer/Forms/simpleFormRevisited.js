var configurations = [
  {
    xtype: 'textfield',
    fieldLabel: 'Title',
    name: 'title',
    allowBlank: false
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
];

function createSimpleForm() {
  Ext.create('Ext.form.Panel', {
    url: 'google.com',
    renderTo: document.body,
    frame: true,
    title: 'Movie Information Form',
    width: 350,
    bodyPadding: 10,
    items: configurations
  });
}

Ext.onReady(function () {
  createSimpleForm();
});
