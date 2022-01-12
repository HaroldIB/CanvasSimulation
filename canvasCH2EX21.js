
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
        var gr = context.createRadialGradient(50,50,25,100,100,100);
        // Add the color stops.
        gr.addColorStop(0,'rgb(255,0,0)');
        gr.addColorStop(.5,'rgb(0,255,0)');
        gr.addColorStop(1,'rgb(255,0,0)');
        // Use the gradient for the fillStyle.
        context.fillStyle = gr;
        context.arc(100, 100, 100, (Math.PI/180)*0, (Math.PI/180)*360, false);
        context.fill();
    }
}