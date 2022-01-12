
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
        //now draw a red rectangle
        context.setTransform(1,0,0,1,0,0);
        var angleInRadians = 10 * Math.PI / 180;
        var x = 100;
        var y = 100;
        var width = 100;
        var height = 50;
        context.translate(x+.5*width, y+.5*height);
        context.rotate(angleInRadians);
        context.scale(2,2);
        context.fillStyle = "red";
        context.fillRect(-.5*width,-.5*height , width, height);
    }
}