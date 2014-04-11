Ext.onReady(function(){
  Ext.MessageBox.prompt('Name', 'Please enter your name:', showResultText);
  function showResultText(result){
    Ext.MessageBox.show({
      title: 'Please wait',
      msg: 'Loading items...',
      progressText: 'Initializing...',
      width:300,
      progress:true,
      closable:false,
      animateTarget: 'mb6'
    });
  }
});
