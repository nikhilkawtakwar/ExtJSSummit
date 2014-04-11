






function createSimpleGrid() {
  Ext.create('Ext.data.Store', {
    storeId: 'synerzipStore',
    fields: ['name', 'email', 'phone', 'doj'],

    sorters: [{
//      property: 'name',
//      direction: 'ASC'
//    }, {
//      property: 'firstName',
//      direction: 'ASC'
    }],

    data: {'employees': [
      { 'name': 'Pankaj', "email": "pankaj@synerzip.com", "phone": "234-234-5645", "doj": '10-10-2012' },
      { 'name': 'Vinay', "email": "vinay@synerzip.com", "phone": "234-294-5645", "doj": '12-04-2012' },
      { 'name': 'Nidhi', "email": "nidhi@synerzip.com", "phone": "234-134-5645", "doj": '01-01-2014'  },
      { 'name': 'Wasim', "email": "wasim@synerzip.com", "phone": "234-234-5645", "doj": '01-10-2005'  },
      { 'name': 'Amit', "email": "amit@synerzip.com", "phone": "234-234-5645", "doj": '01-10-2008'  }
    ]},
    //readers
    proxy: {
      type: 'memory',
      reader: {
        type: 'json',
        root: 'employees'
      }
    }
  });

  Ext.create('Ext.grid.Panel', {
    title: 'Synerzip',
    store: Ext.data.StoreManager.lookup('synerzipStore'),
    columns: [
      { text: 'Name', dataIndex: 'name', renderer : function(name){ return '<b>'+name+'</b>';} },
      { text: 'Email', dataIndex: 'email', width: 200 },
      { text: 'Phone', dataIndex: 'phone' },
      { text: 'Date Of Joining', dataIndex: 'doj' }
    ],
    height: 200,
    width: 500,
    renderTo: Ext.getBody()
  });
}

//The onReady function is what we use to make our code wait until the document is ready.
Ext.onReady(function () {
  createSimpleGrid();
});