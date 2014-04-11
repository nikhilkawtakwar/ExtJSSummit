/**
 *
 */

// Entry point of ExtJS
Ext.onReady(function () {

	Ext.MessageBox.alert('Hello World', 'Hello World of ExtJS', function(result){
     //Ext.get('result').setHTML(result);
	});

//
//	Ext.Msg.show({
//		title: 'Synerzip ExtJS Summit',
//		msg: 'Alok Guha',
//		width: 300,
//		buttons: Ext.Msg.YES,
//		multiline: true,
//		fn: function(){Ext.get('result').setHTML(result);},
//		icon: Ext.window.MessageBox.INFO
//	});


});