
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
        context.fillStyle = '#aaaaaa';
        context.fillRect (0, 0, 200, 200);
        context.fillStyle = '#ffffff';
        context.font = '20px _sans';
        context.textBaseline = 'top';
        context.fillText("Canvas !!!", 0, 0);
    }
}