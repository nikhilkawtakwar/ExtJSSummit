try{
var videoElem = document.getElementById("myVideo");
var playButton= document.getElementById("play");
var pauseButton= document.getElementById("pause");
var stopButton= document.getElementById("stop");
var rewindButton= document.getElementById("rewind");
var forwardButton= document.getElementById("forward");

playButton.addEventListener("click",function(){
  var videoElem = document.getElementById("myVideo");
  alert(videoElem);
  videoElem.play();
});

}
catch(err){
alert(err);
}