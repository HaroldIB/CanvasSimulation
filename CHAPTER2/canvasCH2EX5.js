
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
        context.strokeStyle = 'black';
        context.lineWidth = 5;
        
        context.moveTo(0,0);
        context.lineTo(100,200);
        context.arcTo(100,350,450,100,100);

        context.stroke();
        context.closePath();
    }
}