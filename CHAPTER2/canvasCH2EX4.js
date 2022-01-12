
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
        context.arc(100,100,20,0,(Math.PI/180)*90,true);
        context.stroke();
        context.closePath();
    }
}