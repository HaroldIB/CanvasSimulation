
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
        // horizontal gradient values must remain 0
        var gr = context.createLinearGradient(0, 0, 100, 0);
        // Add the color stops.
        gr.addColorStop(0,'rgb(255,0,0)');
        gr.addColorStop(.5,'rgb(0,255,0)');
        gr.addColorStop(1,'rgb(0,0,255)');

        // Use the gradient for the fillStyle.
        context.fillStyle = gr;
        context.fillRect(0, 0,100,100);
    }
}