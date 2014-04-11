//The onReady function is what we use to make our code wait until the document is ready.
Ext.onReady(function () {
  createGrid();
});


function createGrid() {
  Ext.create('Ext.grid.Panel', {
    title: 'ExtJS Users',
    store: Ext.data.StoreManager.lookup('extUserStore'),
    columns: columnArray,
    height: 600,
    width: 600,
    renderTo: Ext.getBody()
  });
}


// Set up a model to use in our Store
  Ext.define('User', {
    extend: 'Ext.data.Model',
    fields: [
      {name: 'fname', type: 'string'},
      {name: 'lname', type: 'string'},
      {name: 'age', type: 'int'},
      {name: 'address', type: 'string'},
      {name: 'city', type: 'string'},
      {name: 'dob', type: 'string'}
    ]
  });

  Ext.create('Ext.data.Store', {
    storeId: 'extUserStore',
    model: 'User',
    proxy: {
      type: 'ajax',
      url: 'extusers.json',
      reader: {
        type: 'json',
        root: 'users'
      }
    },
    autoLoad: true
  });


  var columnArray = [
    { text: 'First Name', dataIndex: 'fname' },
    { text: 'Last Name', dataIndex: 'lname' },
    { text: 'Age', dataIndex: 'age' },
    { text: 'Address', dataIndex: 'address' },
    { text: 'City', dataIndex: 'city' },
    { text: 'Date of Birth', dataIndex: 'dob' }
  ];

