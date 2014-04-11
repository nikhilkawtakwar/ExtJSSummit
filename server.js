/**
 * Created with JetBrains WebStorm.
 * User: Alok Guha
 * Date: 3/14/14
 * Time: 10:41 AM
 * To change this template use File | Settings | File Templates.
 */
var express = require('express');
var app = express()

app.get('/',function(req,res){
    res.redirect('/index.html');
});

app.get('/table',function(req,res){
	res.redirect('/table.html');
});

app.configure(function(){
    app.use(express.directory(__dirname + '/Training'));
    app.use(express.static(__dirname + '/Training'));
});




var port = 4000;
app.listen(port,function(){
    console.log("Listening on Port "+port);
});

