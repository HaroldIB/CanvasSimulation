window.addEventListener("load",eventWindowLoaded,false);

function eventWindowLoaded(){
    canvasApp();
}

function canvasSupport(){
    return Modernizr.canvas;
}

function canvasApp(){
    if(!canvasSupport()){
        return;
    }
    var theCanvas = document.getElementById("canvasOne");
    var context = theCanvas.getContext("2d");

    function drawScreen(){
        //Fondo del Canvas
        context.globalAlpha = 1;
        context.fillStyle = '#000000';
        context.fillRect(0,0,640,480);
        //Imagen de Fondo
        context.globalAlpha = .25;
        context.drawImage(helloWorldImage, 0, 0);

        if(fadeIn){
            alpha += .01;
            if(alpha >= 1){
                alpha = 1;
                fadeIn = false;
            }
        }else{
            alpha -=.01;
            if(alpha<0){
                alpha=0;
                fadeIn=true;
            }
        }

        //Texto
        context.font = "72px Sans-Serif";
        context.textBaseline = "top";
        context.globalAlpha = alpha;
        context.fillStyle='#ffffff';
        context.fillText(text,150,200);
    }
    var text = "Hola Mundo";
    var alpha = 0;
    var fadeIn = true;
    //Imagen
    var helloWorldImage = new Image();
    helloWorldImage.src='html5bg.jpg';

    function gameLoop(){
        window.setTimeout(gameLoop,20);
        drawScreen();
    }
    gameLoop();

}


