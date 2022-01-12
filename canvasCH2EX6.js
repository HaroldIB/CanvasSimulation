
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
        context.beginPath();
        context.lineWidth = 5;
        
        context.moveTo(150,0);
        context.bezierCurveTo(200,125,600,375,50,400);

        context.stroke();
        context.closePath();
    }
}