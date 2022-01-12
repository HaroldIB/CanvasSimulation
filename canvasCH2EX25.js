
window.addEventListener('load', eventWindowLoaded, false);

function eventWindowLoaded(){
    canvasApp();
}

function canvasSupport(){
    return Modernizr.canvas;
}

function canvasApp(){
    if(!canvasSupport()){
        return;
    }else{
        var theCanvas = document.getElementById('canvas');
        var context = theCanvas.getContext("2d");
    }
    drawScreen();
    function drawScreen(){
        var fillImg = new Image();
        fillImg.src = 'fill_20x20.gif';
        fillImg.onload = function(){
        var fillPattern = context.createPattern(fillImg,'repeat');
        context.fillStyle = fillPattern;
        context.fillRect(0,0,200,200);
        }
    }
}