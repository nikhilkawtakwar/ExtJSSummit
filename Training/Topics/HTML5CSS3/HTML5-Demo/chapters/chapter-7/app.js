var indexElem = document.getElementById("index");
var outputElem = document.getElementById("output");

var fibocanniButton = document.getElementById("fibocanni");
var fibocanniWorkerButton = document.getElementById("fibocanniWorker");


fibocanniButton.addEventListener("click",function(){
   outputElem.innerHTML = "Calculating....";
   var index = indexElem.value;
   var output = fibonacci(index);
   outputElem.innerHTML = output;
});

fibocanniWorkerButton.addEventListener("click",function(){
   outputElem.innerHTML = "Calculating....";
   var index = indexElem.value;
   worker.postMessage(index);
});
var worker = new Worker('worker.js');
worker.addEventListener('message', function(e){
   outputElem.innerHTML=e.data;
});
          
