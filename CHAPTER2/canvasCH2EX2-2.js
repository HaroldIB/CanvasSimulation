
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
        context.strokeStyle = 'black';
        context.lineWidth = 10;
        context.lineCap = 'square';
        context.beginPath();
        context.moveTo(20,0);
        context.lineTo(100,0);
        context.stroke();
        context.closePath();
    }
}