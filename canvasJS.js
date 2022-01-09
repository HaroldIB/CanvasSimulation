//Agregamos un oyente al evento, que ocurre cuando termina de cargar la pagina
//eventWindowLoaded llamará la función canvasApp cuando ocurra el evento
window.addEventListener("load", eventWindowLoaded, false);	
        //Utilizamos un debugger para el  console.log
        var Debugger = function () { };
        Debugger.log = function (message) {
            try {
                console.log(message);
            } catch (exception) {
                return;
            }
        }
        //Evento que se ejecuta cuando carga la pagina web
        function eventWindowLoaded () {
            canvasApp();
        }
        //Prueba si existe un contexto para crear el linezo para evitr errores.
        function canvasSupport () {
            return Modernizr.canvas;
        }
        //Función para ejecutar
        function canvasApp () {
                if (!canvasSupport()) {
                    return;
                }

                var theCanvas = document.getElementById("canvasOne");
                var context = theCanvas.getContext("2d"); 
                
                Debugger.log("Drawing Canvas");

                function drawScreen() {
                    //background
                    context.fillStyle = "#ffffaa";
                    context.fillRect(0, 0, 500, 300);    
                    //text
                    context.fillStyle    = "#000000";
                    context.font         = "20px _sans";
                    context.textBaseline = "top";
                    context.fillText  ("Hello World!", 195, 80 );
                    //image
                    var helloWorldImage = new Image();
                    helloWorldImage.src = "helloworld.gif";
                    helloWorldImage.onload = function () {
                        context.drawImage(helloWorldImage, 160, 130);
                    }
                    //box
                    context.strokeStyle = "#000000"; 
                    context.strokeRect(5,  5, 490, 290);
                }
                
                drawScreen();
            } 