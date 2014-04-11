Ext.onReady(function(){
  var synerzipTreeStore = Ext.create('Ext.data.TreeStore', {
    root: {
      expanded: true,
      text : 'Synerzip',
      children: [
        { text: "Google", leaf: true },

        { text: "Google - QuickOffice", expanded: true, children: [
          { text: "QO-Sheet", leaf: true },
          { text: "QO-Word", leaf: true },
          { text: "QO-Point", leaf: true}
        ] },


        { text: "PDX", leaf: true }
      ]
    }
  });

  Ext.create('Ext.tree.Panel', {
    title: 'Synerzip Tree',
    width: 200,
    height: 250,
    store: synerzipTreeStore,
    rootVisible: true,
    renderTo: Ext.getBody()
  });
});