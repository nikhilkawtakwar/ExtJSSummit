$(document).ready(function() {

    if (!$.browser.webkit) {
        alert("Please use Chrome Browser for this site");
    }
    $(".slide-strip>article").each(function(num,elem){
        var title = $(elem).find('header').html();
        $(".toc>ol").append("<li>"+title+"</li>");
    });

    localStorage.slideNo = parseInt(0);
    localStorage.totalSlides = parseInt($(".slide-strip>article").length);

    $(".slide-strip").css("width",parseInt(localStorage.totalSlides*window.innerWidth) + "px");

    $(".slide-strip>article").css("width",window.innerWidth+"px");

    $("#toc-toggle").click(function(){
        $("#toc").toggleClass("toc-shown");
    });

    $("#help-toggle").click(function(){
        $("#help").toggleClass("help-shown");
    });

    $(".prev-slide").click(function(){
        goLeft();
    });
    $(".next-slide").click(function(){
        goRight();
    });

    $(".toc>ol>li").click(function(event){

        console.log("Clicked on Toc "+$(event.target).html());
        var slideNo = $(this).index();

        moveTo(slideNo);
    });

    $(document).keydown(function(e){
        if (e.keyCode == 37) {
            console.log("Left Arrow Key Press");
            goLeft();
            return false;
        }
        else if(e.keyCode == 39) {
            console.log("Right Arrow Key Press");
            goRight();
            return false;
        }
        else if(e.keyCode == 38) {
            console.log("Up Arrow Key Press");
            moveTo(0);
            return false;
        }
        else if(e.keyCode == 40) {
            console.log("Down Arrow Key Press");
            moveTo(localStorage.totalSlides - 1)
            return false;
        }

    });

    console.log("HTML5 Presentation JavaScript Loaded");

});

function goLeft(){
    localStorage.slideNo = localStorage.slideNo<=0?0:parseInt(localStorage.slideNo)-1;
    moveTo(localStorage.slideNo);
}

function goRight(){
    localStorage.slideNo = localStorage.slideNo>=(localStorage.totalSlides-1)?(localStorage.totalSlides-1):parseInt(localStorage.slideNo)+1;
    moveTo(localStorage.slideNo);
}

function moveTo(index){
    localStorage.slideNo = index;
    var newX =  - ( index * $(".slide-strip>article").width()) ;
    $(".slide-strip").css("-webkit-transform","translate("+newX+"px,0px)");
    $(".slide-strip").css("-moz-transform","translate("+newX+"px,0px)");
    $(".slide-strip").css("-o-transform","translate("+newX+"px,0px)");
}