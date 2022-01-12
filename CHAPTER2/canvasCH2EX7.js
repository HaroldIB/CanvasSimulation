
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
        context.setTransform(1,0,0,1,0,0);
        var angleInRadians = 45*Math.PI/180;
        context.rotate(angleInRadians);
        context.fillStyle = "red";
        context.fillRect(100,100,50,50);
    }
}