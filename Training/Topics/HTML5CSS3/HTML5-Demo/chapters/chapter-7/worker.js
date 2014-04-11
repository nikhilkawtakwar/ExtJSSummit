//Worker
importScripts('fibonacci.js');
addEventListener('message', function(e){
  var index = parseInt(e.data);
  var result = fibonacci(index);
  postMessage(result);
})











