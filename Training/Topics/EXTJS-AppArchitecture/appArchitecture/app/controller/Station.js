Ext.define('Pandora.controller.Station', {
    extend: 'Ext.app.Controller',

    refs: [{
        ref: 'stationsList',
        selector: 'stationslist'
    }],

    stores: ['Stations', 'SearchResults'],
    
    init: function() {
      console.log("onStationsControllerInit");
        // Start listening for events on views
        this.control({
            'stationslist': {
                selectionchange: this.onStationSelect
            },
            'newstation': {
                select: this.onNewStationSelect
            }
        });
    },
    
    onLaunch: function() {
      console.log("onLaunchStationController");
        var stationsStore = this.getStationsStore();        
        stationsStore.load({
            callback: this.onStationsLoad,
            scope: this
        });
    },

    onStationsLoad: function() {
      console.log("onStationsLoad");
        var stationsList = this.getStationsList();
        stationsList.getSelectionModel().select(0);
    },
    
    onStationSelect: function(selModel, selection) {
      console.log("onStationsSelect");
        // Fire an application wide event
      console.log("fire onStationsSelect");
        this.application.fireEvent('stationstart', selection[0]);

    },
    
    onNewStationSelect: function(field, selection) {
        var selected = selection[0],
            store = this.getStationsStore(),
            list = this.getStationsList();
            
        if (selected && !store.getById(selected.get('id'))) {
            store.add(selected);
        }
        list.getSelectionModel().select(selected);
    }
});
