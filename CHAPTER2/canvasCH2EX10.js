
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
        //now draw a red square
        context.setTransform(1,0,0,1,0,0);
        var angleInRadians = 45 * Math.PI / 180;
        var x = 50;
        var y = 100;
        var width = 40;
        var height = 40;
        context.translate(x+.5*width, y+.5*height);
        context.rotate(angleInRadians);
        context.fillStyle = "red";
        context.fillRect(-.5*width,-.5*height , width, height);
        context.setTransform(1,0,0,1,0,0);
        var angleInRadians = 75 * Math.PI / 180;
        var x = 100;
        var y = 100;
        var width = 40;
        var height = 40;
        context.translate(x+.5*width, y+.5*height);
        context.rotate(angleInRadians);
        context.fillStyle = "red";
        context.fillRect(-.5*width,-.5*height , width, height);
        context.setTransform(1,0,0,1,0,0);
        var angleInRadians = 90 * Math.PI / 180;
        var x = 150;
        var y = 100;
        var width = 40;
        var height = 40;
        context.translate(x+.5*width, y+.5*height);
        context.rotate(angleInRadians);
        context.fillStyle = "red";
        context.fillRect(-.5*width,-.5*height , width, height);
        context.setTransform(1,0,0,1,0,0);
        var angleInRadians = 120 * Math.PI / 180;
        var x = 200;
        var y = 100;
        var width = 40;
        var height = 40;
        context.translate(x+.5*width, y+.5*height);
        context.rotate(angleInRadians);
        context.fillStyle = "red";
        context.fillRect(-.5*width,-.5*height , width, height);
    }
}