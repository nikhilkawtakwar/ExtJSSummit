Ext.onReady(function () {

  Ext.QuickTips.init();

  function formatDate(value) {
    return value ? value.dateFormat('M d, Y') : '';
  };
  // shorthand alias
  var fm = Ext.form;

  // custom column plugin example
  var checkColumn = new Ext.grid.CheckColumn({
    header: "Status",
    dataIndex: 'status',
    width: 55
  });

  var searchBar = new fm.TextField({ allowBlank: false, id: 'search', maxLength: 10 });
  var searchButton = new Ext.Button(
    {    text: 'Search Hospitals',
      handler: click
    });

  //searchButton.on("clickEvent",click());
  function click() {
    var val = Ext.get('search');
    alert('searching ' + val.value);
  }

  // the column model has information about grid columns
  // dataIndex maps the column to the specific data field in
  // the data store (created below)
  var cm = new Ext.grid.ColumnModel([
    {
      id: 'hospitalID',
      header: "ID",
      width: 50,
      dataIndex: 'hospitalID'
    },
    {
      id: 'hospitalName',
      header: "Hosp Name",
      dataIndex: 'hospitalName',
      width: 220,
      editor: new fm.TextField({
        allowBlank: false
      })
    },
    {
      header: "charges",
      dataIndex: 'charges',
      width: 70,
      align: 'right',
      renderer: 'usMoney',
      editor: new fm.NumberField({
        allowBlank: false,
        allowNegative: false,
        maxValue: 100000
      })
    },
    {
      header: "Available",
      dataIndex: 'availDate',
      width: 95,
      renderer: formatDate,
      editor: new fm.DateField({
        format: 'm/d/y',
        minValue: '01/01/08',
        disabledDays: [6],
        disabledDaysText: 'Hospital is not available on these days'
      })
    },
    checkColumn
  ]);


  // by default columns are sortable
  cm.defaultSortable = true;
  var modifiedRecords;
  // this could be inline, but we want to define the Plant record
  // type so we can add records dynamically
  var gridDataRecord = Ext.data.Record.create([
    {name: 'hospitalName', sortType: 'string'},
    {name: 'hospitalID', sortType: 'string'},
    {name: 'charges', sortType: 'float'},
    {name: 'availDate', type: 'date', dateFormat: 'Y-m-d'},
    {name: 'status', sortType: 'bool'}
  ]);


  var bufferedJsonReader = new Ext.data.JsonReader(gridDataRecord);

  // create the data store
  var store = new Ext.data.JsonStore({
    fields: [
      {name: 'hospitalName'},
      {name: 'hospitalID', type: 'int'},
      {name: 'charges', type: 'float'},
      {name: 'availDate', type: 'date', dateFormat: 'Y-m-d'},
      {name: 'status', sortType: 'bool'}
    ],
    url: '../data/HospitalServlet',
    root: 'hospital',
    reader: bufferedJsonReader,
    autoLoad: true
  });

  // create the editor grid
  var grid = new Ext.grid.EditorGridPanel({
    store: store,
    cm: cm,
    renderTo: 'editor-grid',
    width: 800,
    height: 400,
    autoExpandColumn: 'hospitalName',
    title: 'Hospital Information',
    frame: true,
    loadMask: 'Loading',
    plugins: checkColumn,
    clicksToEdit: 1,
    tbar: [
      {
        text: '<b>Add Hospital</b>',
        handler: function () {
          var p = new gridDataRecord({
            hospitalName: 'New Hospital',
            charges: 0,
            availDate: (new Date()).clearTime(),
            status: false
          });
          grid.stopEditing();
          store.insert(0, p);
          grid.startEditing(0, 0);
        }
      },

      {
        text: '<b>Commit Changes</b>',
        handler: function () {
          modifiedRecords = store.getModifiedRecords();
          var queryString = '';
          if (modifiedRecords.length == 0) {
            alert('No changes to save !!');
          }
          else {
            var datacount = 0;
            for (var i = 0; i < modifiedRecords.length; i++) {
              var dateunfor = new Date(modifiedRecords[i].get('availDate'));
              var dateForm = dateunfor.format('Y-m-d');
              //alert('Id = '+modifiedRecords[i].get('hospitalID')+'     NAME : '+modifiedRecords[i].get('hospitalName')+' charges = '+modifiedRecords[i].get('charges')+' Date = '+dateForm+' status = '+modifiedRecords[i].get('status'));
              queryString += '&hospital_id' + i + '=' + modifiedRecords[i].get('hospitalID') + '&hospitalName' + i + '=' + modifiedRecords[i].get('hospitalName') + '&charges' + i + '=' + modifiedRecords[i].get('charges') + '&avalble_date' + i + '=' + dateForm + '&status' + i + '=' + modifiedRecords[i].get('status');
              datacount++;
            }
            //alert(queryString);

            Ext.Ajax.request({
              url: '../data/AddUpdateHospitalServlet?reportedData=' + datacount + '&' + queryString,
              success: function () {
                alert('Commited :)');
                store.rejectChanges();
                store.reload();
              },
              failure: function () {
                alert('Try again.. some network issues !!');
                store.rejectChanges();
                store.reload();
              },
              headers: {
                'my-header': 'foo'
              }
            });

          }
        }
      },
      {
        text: '<b>Discard Changes</b>',
        handler: function () {
          if (confirm('Are you sure ?')) {
            store.rejectChanges();
            store.load();
          }
        }
      },
      searchBar,
      searchButton

    ]
  });

  // trigger the data store load

});


Ext.grid.CheckColumn = function (config) {
  Ext.apply(this, config);
  if (!this.id) {
    this.id = Ext.id();
  }
  this.renderer = this.renderer.createDelegate(this);
};

Ext.grid.CheckColumn.prototype = {
  init: function (grid) {
    this.grid = grid;
    this.grid.on('render', function () {
      var view = this.grid.getView();
      view.mainBody.on('mousedown', this.onMouseDown, this);
    }, this);
  },

  onMouseDown: function (e, t) {
    if (t.className && t.className.indexOf('x-grid3-cc-' + this.id) != -1) {
      e.stopEvent();
      var index = this.grid.getView().findRowIndex(t);
      var record = this.grid.store.getAt(index);
      record.set(this.dataIndex, !record.data[this.dataIndex]);
    }
  },

  renderer: function (v, p, record) {
    p.css += ' x-grid3-check-col-td';
    return '<div class="x-grid3-check-col' + (v ? '-on' : '') + ' x-grid3-cc-' + this.id + '">&#160;</div>';
  }
};



