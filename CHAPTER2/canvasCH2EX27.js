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
        context.fillStyle = 'red';
        context.shadowOffsetX = -4;
        context.shadowOffsetY = -4;
        context.shadowColor = 'black';
        context.shadowBlur = 4;
        context.fillRect(10,10,100,100);
        context.shadowOffsetX = 4;
        context.shadowOffsetY = 4;
        context.shadowColor = 'black';
        context.shadowBlur = 4;
        context.fillRect(150,10,100,100);
        context.shadowOffsetX = 10;
        context.shadowOffsetY = 10;
        context.shadowColor = 'rgb(100,100,100)';
        context.shadowBlur = 8;
        context.arc(200, 300, 100, (Math.PI/180)*0, (Math.PI/180)*360, false);
        context.fill();
        }
    }
