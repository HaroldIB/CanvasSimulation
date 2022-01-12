
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
        var gr = context.createLinearGradient(0, 0, 0, 100);
        // Add the color stops.
        gr.addColorStop(0,'rgb(255,0,0)');
        gr.addColorStop(.5,'rgb(0,255,0)');
        gr.addColorStop(1,'rgb(255,0,0)');
        // Use the gradient for the fillStyle.
        context.fillStyle = gr;
        context.beginPath();
        context.moveTo(0,0);
        context.lineTo(50,0);
        context.lineTo(100,50);
        context.lineTo(50,100);
        context.lineTo(0,100);
        context.lineTo(0,0);
        context.stroke();
        context.fill();
        context.closePath();
    }
}