function createLayout() {
  Ext.create('Ext.panel.Panel', {
    renderTo: Ext.getBody(),
    width: 400,
    height: 200,
    title: 'Container Panel',
    layout: 'column',
    items: [
      {
        xtype: 'panel',
        title: 'Child Panel 1',
        height: 100,
        columnWidth: 0.5
      },
      {
        xtype: 'panel',
        title: 'Child Panel 2',
        height: 100,
        columnWidth: 0.5
      }
    ]
  });
}

//The onReady function is what we use to make our code wait until the document is ready.
Ext.onReady(function() {
  createLayout();
});