Ext.define('Pandora.controller.Song', {
    extend: 'Ext.app.Controller',

    refs: [{
        ref: 'songInfo',
        selector: 'songinfo'
    }, {
        ref: 'recentlyPlayedScroller',
        selector: 'recentlyplayedscroller'
    }],

    stores: ['RecentSongs'],
    
    init: function() {
      console.log("onSongsControllerInit");
        this.control({
            'recentlyplayedscroller': {
                selectionchange: this.onSongSelect
            }
        });

        // Listen for an application wide event
        this.application.on({
            stationstart: this.onStationStart,
            scope: this
        });
    },
    
    onStationStart: function(station) {
        var store = this.getRecentSongsStore();
        console.log("onStationStart");
        store.load({
            callback: this.onRecentSongsLoad,
            params: {
                station: station.get('id')
            },            
            scope: this
        });
    },
    
    onRecentSongsLoad: function(songs, request) {
      console.log("onRecentSongsLoad");
        var store = this.getRecentSongsStore(),
            selModel = this.getRecentlyPlayedScroller().getSelectionModel();

        // The data should already be filtered on the serverside but since we
        // are loading static data we need to do this after we loaded all the data
        store.clearFilter();
        store.filter('station', request.params.station);
        store.sort('played_date', 'ASC');        
      console.log("beforeSongSelect");
        selModel.select(store.last());
    },
    
    onSongSelect: function(selModel, selection) {
      console.log("onSongSelect");
        this.getSongInfo().update(selection[0]);
    }
});
