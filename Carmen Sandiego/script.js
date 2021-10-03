// U1E1 Comentarios

const ejercicio1 = document.querySelector(".exercise1")
ejercicio1.addEventListener("click", e => {
    'use strict';
    alert(`El resultado está en el código JavaScript`);
});

/*
<!DOCTYPE HTML>
<html>
<head>
<title></title>
</head>
<body>
//Debería de poner <script>
<scrpt>
    //Deberíamos de declarar la variable con: "let, var, const".
    y=prompt('INTRODUZCA NÚMERO');

    //En el bucle no se ha inicializado la variable "x".
    //Deberíamos de sustituir "var" por "let". Aunque eso no es un error es un código más limpio.
    y=parseInt(y);for (var x =  ; x <= 10; x++);{

    //Tampoco hemos declarado la variable "r" con "let".
    r=y*x;
    document.write(y+"x"+x+"="+ r + "<br\>");
}
</script>
</body>
</html>
 */


//U1E2 Cono

const ejercicio2 = document.querySelector(".exercise2");
ejercicio2.addEventListener("click", (e) => {
    'use strict';

    /*
    En Santiago de Compostela están trabajando en un prototipo de conos como sombreros para no mojarse y que así puedan pasearse
   por la ciudad cuando llueve (es decir, prácticamente completamente el año entero).
   Están creando conos de distinto tamaño en función del radio de la cabeza de cada gallego y de la altura que quieren darle al cono
   y necesitan calcular el volumen de cada uno, pero lo están haciendo a mano. ¿Podrías ayudarles a automatizar esa tarea?
   Realiza las operaciones, primero, paso a paso y luego utilizando una sola línea de código.
     */

    let pregunta1;
    let pregunta2;

    //Pregunta al usuario
    pregunta1 = parseInt(prompt(`¿Cuánto radio tiene su cabeza?`));
    pregunta2 = parseInt(prompt(`¿Cuánta altura quiere darle al cono?`));

    //Invoco la función
    console.log((volumenCono(pregunta1, pregunta2)).toFixed(2));

    //Función de crear el Volumen de un cono
    function volumenCono(r, h) {
        return (1 / 3 * h * Math.PI * Math.pow(r, 2));
    }

});

//U1E3 Geometría

const ejercicio3 = document.querySelector(".exercise3");
ejercicio3.addEventListener("click", e => {
    'use strict';

    //Estos ejercicios los voy a realizar mediante "funciones flecha". También se podría utilizar
    //Con function(){}.

    //Área del triangulo:
    const areaTriangulo = (b, a) => (b * a) / 2;

    //Perimetro del triangulo equilátero:
    const perimetroTrianguloEquilatero = (l) => 3 * l;

    //Perimetro del triangulo isosceles:
    const perimetroTrianguloIsosceles = (l1, l2) => (2 * l1) + l2;

    //Perimetro del triangulo escaleno:
    const perimetroTrianguloEscaleno = (l1, l2, l3) => l1 + l2 + l3;

    //Area del cuadrado:
    const areaCuadrado = (l) => Math.pow(l, 2);

    //Perimetro del cuadrado:
    const perimetroCuadrado = (l) => l * 4;

    //Area del rectángulo:
    const areaRectangulo = (l1, l2) => l1 * l2;

    //Area del circulo:
    const areaCirculo = (r) => Math.PI * Math.pow(r, 2);

    //Longitud de la Circunferencia:
    const longitudCircunferencia = (r) => 2 * Math.PI * r;

    //Comprobación:
    console.log(`· Área del triangulo: ${areaTriangulo(5, 10)}
· Perimetro del triangulo equilátero: ${perimetroTrianguloEquilatero(4)}
· Perimetro del triangulo isosceles: ${perimetroTrianguloIsosceles(6, 10)}
· Perimetro del triangulo escaleno: ${perimetroTrianguloEscaleno(7, 9, 11)}
· Area del cuadrado: ${areaCuadrado(6)}
· Area del rectángulo: ${areaRectangulo(5, 6)}
· Area del circulo: ${areaCirculo(7)}
· Longitud de la Circunferencia: ${longitudCircunferencia(6)}
                `);

});


//U1E41 Operadores

const ejercicio4 = document.querySelector(".exercise4");
ejercicio4.addEventListener("click", e => {
    function mostrarMensaje() {
        var a, b, c, d, eTexto;
        a = 2;
        b = 7;
        c = true;
        d = false;
        eTexto = '1';
        alert('VERDADERO: ' + (a + b !== 8 && a - b !== 1));
        alert('FALSO: ' + (a + b == 8 && a - b == -2));
        alert('VERDADERO: ' + (c || d));
        alert('FALSO: ' + (c && d));
        //La funcion isNaN es un valor que representa Not-A-Number.
        alert('FALSO: ' + (isNaN(a)));
        alert('FALSO: ' + (eTexto === 1));
        alert('FALSO: ' + (eTexto === 1 && eTexto != "Caracol"));
        alert('VERDADERO: ' + ('Zapato' !== 'almendra'));
    }

    mostrarMensaje();
});


//U1E5 Condicionales
const ejercicio5 = document.querySelector(".exercise5");
ejercicio5.addEventListener("click", e => {
    'use strict';
    /*
    * Diseña un pequeño juego que te permita adivinar el nombre de una de cuatro localidades de Valencia (a tu elección)
      haciendo solo DOS PREGUNTAS DE SÍ O NO.
      Por ejemplo: "¿Es una localidad costera? --> SÍ", "¿Tiene equipo de futbol en primera? --> Sí".
      Y el programa diría: "Estás pensando en Valencia."
      Para solicitar al usuario una respuesta podrás hacerlo con la instrucción:
       var respuesta = prompt("Introduzca la respuesta");
    * */
    let respuesta;
    let count = 0;

    //Este ejercicio también se puede hacer con if(){
    //                                               }else
    for (let i = 0; i < 2; i++) {
        (i === 0) ? respuesta = prompt(`¿Se encuentra la ciudad de las artes y ciencias de valencia? `) : respuesta = prompt(`¿Es una ciudad grande?`);

        (respuesta === "si" || respuesta === "Si") ? count++ : count;
    }

    console.log((count === 2 ? `¡Estas pensando en valencia!` : `No estás pensando en valencia`));

});

//U1E6 Bucles For
const ejercicio6 = document.querySelector(".exercise6");
ejercicio6.addEventListener("click", e => {
    'use strict';

    /*
    *En la estación del Ave de Sevilla necesitan un generador de horarios que muestre las horas del día desde las 08 de la mañana
     hasta las 20:30 de la noche de 15 minutos en 15 minutos teniendo en cuenta que tanto horas como minutos son dos dígitos
     (no puede haber un 9:30, o un 14:0). Utiliza los bucles que sean necesarios y muéstralos en la página (no utilices alerts).
    * */

    //Bucle para la hora
    for (let i = 8; i <= 20; i++) {
        //Bucle para el prime dígitos de los minutos.
        for (let j = 0; j < 9; j++) {
            //Bucle para el segundo dígitos de los minutos.
            for (let k = 0; k < 9; k++) {
                //condicional para que solo pasen de 15 en 15 minutos.
                if ((k === 0 && j === 0) || (k === 5 && j === 1) || (k === 0 && j === 3) || (k === 5 && j === 4) && !(i === 20 && j === 4 && k === 5)) {
                    if (i < 10) {
                        console.log(`Son las 0${i}:${j}${k}`);
                    } else {
                        console.log(`Son las ${i}:${j}${k}`);
                    }
                }
            }
        }
    }
});

//U1E7 Bucles For in

const ejercicio7 = document.querySelector(".exercise7");
ejercicio7.addEventListener("click", e => {
    'use strict';

    /*
    *El entrenador de un equipo de baloncesto cree que el número 4 da buena suerte, así que manda hacer las camisetas a una empresa,
     pasándole los números de dorsal desde el 4 al 40. ¿Podrías automatizar el proceso?
    * */

    //Creo un Array con los números de los jugadores solo de 4 en 4
    let jugador = {
        "Jesus": 4,
        "Marcos": 8,
        "Javier": 12,
        "Esmeralda": 16,
        "Nacho": 20,
        "Alfonso": 24,
        "Marta": 28,
        "Jose": 32,
        "Paco": 36,
        "Maria": 40
    };

    //Los invoco con un "forin"
    for (const jugadores in jugador) {
        console.log(jugadores);
    }
});

//U1E8 Bucles
const ejercicio8 = document.querySelector(".exercise8");
ejercicio8.addEventListener("click", e => {
    'use strict';

    /*
    *Crea una función que te permita mostrar un control parental en tu página web que te impida entrar en ella hasta que el usuario
     introduzca una respuesta válida.
     Se pedirá al usuario que escriba el apellido del primer presidente de la democracia española a través de un cuadro de diálogo emergente.
     Hasta que el usuario no introduzca el valor correcto no se mostrará el texto de la página (pon lo que tú prefieras).
     Crea otra función que modifique el programa anterior para que realice lo siguiente:
     - Primero preguntará "¿Cuál fue el primer presidente de la democracia española?".
     - En caso de que el usuario introduzca mal nombre y apellido, debe mostrar como mensaje de error "ERROR: Inténtelo de nuevo.
     ¿Cuál fue el primer presidente de la democracia española?".
     - En caso de que el usuario introduzca únicamente el nombre del presidente, sin apellido, indicaremos
      "Te falta el apellido ¿Cuál fue el primer presidente de la democracia española?". Realiza la misma operación con el apellido.
    * */


    //Parte 1:
    const juegoAcertijo = () => {
        let respuesta;
        do {
            respuesta = prompt(`Escribe el apellido del primer presidente de la democracia española`);
            respuesta = respuesta.toLowerCase();
            if (respuesta === "suarez") {

                //Mostrar mensaje.
                const mensaje = document.querySelector(".mostrarMensaje");
                mensaje.addEventListener("click", cambiarTexto()
                );


                //Borrar mensaje.
                const borrar = document.querySelector(".adios");
                borrar.addEventListener("click", borrado => location.reload());

                //Funciòn para mostrar mensaje.
                function cambiarTexto() {
                    document.querySelector(".mostrarMensaje").innerHTML = `<p style='color: red; font-family: Bahnschrift;
                            font-size: large; text-align: center'> ¡Enhorabuena has acertado! <br> 
                            <button class="adios"> B O R R A R</button> </p>`;
                }


            }
        } while (respuesta !== "suarez");
    }

    juegoAcertijo();
    

    /*
    // Parte 2:
    const juegoAcertijoMejorado = () => {
        let respuesta;
        let aux = "";
        do {
            respuesta = prompt(`¿Cuál fue el primer presidente de la democracia española?`);

            //He puesto 13 de límete porque "adolfo suarez" tiene 13 letras contando el espacio en blanco.
            for (let i = 0; i < 13; i++) {
                aux += respuesta.charAt(i)
            }

            //Para poner un string en minúscula
            aux = aux.toLowerCase();

            if (aux === "adolfo suarez") {
                alert(`Enhorabuena, lo has acertado`);
            } else if (aux === "adolfo") {
                alert(`Te falta el apellido`);
            } else if (aux === "suarez") {
                alert(`te falta el nombre`);
            } else {
                alert(`ERROR: Inténtelo de nuevo`);
            }


            console.log(aux);

        } while (respuesta !== "adolfo suarez");
    }

    juegoAcertijoMejorado();

     */


});

//Ejercicio 9

const ejercicio9 = document.querySelector(".exercise9")
ejercicio9.addEventListener("click", e => {
    'use strict';
    /*
    * Crea una función que te permita mostrar los números del 1 al 100 (por pantalla, no utilizando un alert) excepto los múltiplos de 3.
    ¿Sabrías hacerlo de dos maneras diferentes?
    Crea  otra función que muestre una lista con los meses del año excepto los meses de verano.
    ¿Sabrías hacerlo de dos maneras diferentes?
    ¡No olvides comentar el código!
    * */

    //Ejercicio 1:

    //Forma 1 con una función anónima:
    for (let i = 1; i <= 100; i++) {
        if ((numero => numero % 3 !== 0)(i)) console.log(`${i}`);
    }

    //Forma 2 mediante el bucle:
    /*
        for (let i = 1; i < 100; i++) {
            if (i % 3 !== 0){
                console.log(`${i}` );
        }

     */

    //Ejercicio 2:
    /*
    //Mediante Switch
    for (let i = 1; i <= 12; i++) {
        switch (i) {
            case 1:
                console.log(`Mes ${i} es Enero`);
                break;
            case 2:
                console.log(`Mes ${i} es Febrero`);
                break;
            case 3:
                console.log(`Mes ${i} es Marzo`);
                break;
            case 4:
                console.log(`Mes ${i} es Abril`);
                break;
            case 5:
                console.log(`Mes ${i} es Mayo`);
                break;
            case 6:
                continue;
            case 7:
                continue;
            case 8:
                continue;
            case 9:
                continue;
            case 10:
                console.log(`Mes ${i} es Octubre`);
                break;
            case 11:
                console.log(`Mes ${i} es Noviembre`);
                break;
            case 12:
                console.log(`Mes ${i} es Diciembre`);
                break;

        }
    }

     */
    //Forma 2 con un "fori"(normal) y un continue para que vayan saltando las que son del mes de verano.
    /*
    for (let i = 1; i <= 12; i++) {
        if (i > 6 && i <= 9) {
            continue;
        } else {
            console.log(`Mes ${i}`);
        }
    }
     */


});

//Ejercicio Final

const ejercicioFinal = document.querySelector(".final");
ejercicioFinal.addEventListener("click", e => {

    /*
    * Si has jugado alguna vez al trivial sabrás que, cuando un jugador consigue los 6 "quesitos", debe ir al centro del tablero y adivinar al menos 4 de las 6 preguntas que tiene una de las tarjetas escogida al azar.
    Deberás realizar un programa que implemente esa última tarjeta de trivial de tal manera que:
     1. Al jugador se le presentan 6 preguntas, previo nombre de la categoría (Geografía, Arte, Espectáculos, Historia, Ciencias y Deportes). Estas preguntas se mostrarán continuamente hasta que el jugador responda a todas, hasta que gane o hasta que pierda.
     2. El jugador elige una de las preguntas y escribe la respuesta. Si acierta se suma 1 punto al marcador. Sino, no se suma ningún punto. En cualquier caso, la pregunta no vuelve a aparecer en la lista.
     3. Cuando el jugador ha respondido 4 preguntas bien no hace falta que le preguntemos más porque habrá adivinado. Si el jugador ha respondido 3 preguntas mal no hace falta que preguntemos más porque habrá perdido.
    * */

    let arr = ["geografia", "arte", "espectaculos", "historia", "ciencias", "deportes"];
    let pregunta = "";
    let aux = "";
    let arr2 = [];
    let acierto = 0;
    let error = 0;
    let respuesta = "";

    for (const preguntaElement of arr) {
        aux += `${preguntaElement} `
    }
    do {
        pregunta = prompt(`${aux}`);
        switch (pregunta.toLowerCase()) {
            case "geografia":
                respuesta = prompt(`¿Donde se encuentra el himalaya?`).toLowerCase();
                if (respuesta === "china") {
                    acierto++;
                } else {
                    error++;
                }
                break;
            case "arte":
                respuesta = prompt(`¿Quien pintó las Meninas?`).toLowerCase();
                if (respuesta === "velazquez") {
                    acierto++;
                } else {
                    error++;
                }
                break;
            case "espectaculos":
                respuesta = prompt(`¿La peícula con más nota de filmaffinity?`).toLowerCase();
                if (respuesta === "el padrino") {
                    acierto++;
                } else {
                    error++;
                }
                break;
            case "historia":
                respuesta = prompt(`¿Quien descubrió America?(Solo apellido)`).toLowerCase();
                if (respuesta === "colon") {
                    acierto++;
                } else {
                    error++;
                }
                break;
            case "ciencias":
                respuesta = prompt(`¿Quiém es el cientifico más importante de la historia?`).toLowerCase();
                if (respuesta === "newton") {
                    acierto++;
                } else {
                    error++;
                }
                break;
            case "deportes":
                respuesta = parseInt(prompt(`¿En que año gano España el mundial?`));
                if (respuesta === 2010) {
                    acierto++;
                } else {
                    error++;
                }
                break;
        }
        aux = "";
        arr2 = arr.filter(palabra => palabra !== pregunta.toLowerCase());
        for (const arr2Element of arr2) {
            console.log(arr2Element);
        }
        arr = arr2;
        for (const preguntaElement of arr) {
            aux += `${preguntaElement} `
        }


    } while (acierto < 4 && error < 3);

    (acierto === 4 ? alert(`¡HAS GANADO!`) : alert(`¡HAS PERDIDO!`));

});

/*
*@utor Jesús María Olalla Pérez.
* 2ºDAW
* Desarrollo web en entorno cliente.
*  */


