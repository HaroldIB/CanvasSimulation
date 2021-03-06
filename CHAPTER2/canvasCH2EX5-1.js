
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
        //draw a big box on the screen
        context.fillStyle = "black";
        context.fillRect(10, 10, 200, 200);
        context.save();
        context.beginPath(); //clip the canvas to a 50×50 square starting at 0,0
        context.rect(0, 0, 100, 100);
        context.clip();
        //red circle
        context.beginPath();
        context.strokeStyle = "red";
        context.lineWidth = 5;
        context.arc(100, 100, 100, (Math.PI/180)*0, (Math.PI/180)*360, false);
        //full circle
        context.stroke();
        context.closePath();
        context.restore();
        //reclip to the entire canvas
        context.beginPath();
        context.rect(0, 0, 100, 100);
        context.clip();
        //draw a blue line that is not clipped
        context.beginPath();
        context.strokeStyle = "blue";
        context.lineWidth = 5;
        context.arc(100, 100, 50, (Math.PI/180)*0, (Math.PI/180)*360, false);
        //full circle
        context.stroke();
        context.closePath();
    }
}