//Ejercicio 2.1 y 2.2
const mensajes = () => {
    console.log(`Esto es un texto en la consola`); //Esto presenta texto en la consola.
    alert(`Esto es una ventana de texto`); //Esto presenta texto en una ventana emergente.
    document.write(`Esto es un mensaje que escribe en pantalla (Pulse f5 para volver a la pantalla principal)`); //Esto presenta texto escrito en formato html.

}


//Ejercicio 2.3
/*
* Importante: El prompt devuelve siempre un "String" si quiero operar con números tengo que pasarlo
  a "int" mediante el "parseInt".
*/
const informacion = () => {
    let nombre = prompt(`¿Como te llamas?`);
    let edad = prompt(`¿Cuántos años tienes?`);
    let localidad = prompt(`¿De donde eres?`);
    console.log(`Hola me llamo ${nombre}, tengo ${edad} años y soy de ${localidad}`);
}


//Ejercicio 3.2
const variables = () => {
    numero = 11; //equivale a declararla fuera de la función como var. Lo correcto sería poner siempre let.

    if (numero === 11) {
        var variable1 = 1; //Probando con var
        let variable2 = 2; //Probando con let
    }

    console.log(variable1); //La variable 1 existe en este lugar
    console.log(variable2); //La variable 2 no existe en este lugar
}


//Ejercicio 3.3
const tipos = () => {
    let edad = "27", nueva_edad;
    let incremento = 5;
    const nombre = "Jesús Olalla"

    console.log(typeof incremento === "number");
    nueva_edad = edad + incremento;
    console.log(`${nombre} tras ${incremento} años tendrá ${nueva_edad}`);

}


//Ejercicio 3.4.1 / 3.4.2
const coercion = () => {
    let numero = 10;
    console.log(numero); //Ahora es un número ("int").
    console.log(numero.toString()); //Ahora es un "String".
    console.log(parseInt(numero)); //Ahora de nuevo es un número ("int").
}


//Ejercicio 3.4.3
const coercion2 = () => {
    let numero1 = "11"; // Número en String
    let numero2 = 10; // Número normal
    console.log(typeof numero1 + " " + typeof numero2); //Numero en String. (Al juntarse en una cadena de carácteres
    // el numero2 se convierte a "String").
    console.log(numero1 + numero2); //Nos muestra 1110(Lo que hace es unir).
    //Para que nos muestre una suma hay que pasar el número que esta en "String" entero.
    console.log(parseInt(numero1) + numero2);
}


//Ejercicio 3.4.4 / 3.4.5
const coercion3 = () => {
    let num1 = "20";
    let num2 = 25;
    let num3 = "10";
    //variables del ejercicio 3.4.3
    let numero1 = "11";
    let numero2 = 10;
    console.log(numero1 + numero2); //Ejemplo del ejercicio 3.4.3 para ver la diferencia entre ambas.
    console.log(num1 < num2); //Muestra false... Se produce una conversión.
    console.log(num1 < num3); //Al ser los 2 "String" se muestran como True.
}


//Ejercicio 3.4.6
const coercion4 = () => {
    let nombre; //Variable no definida.
    console.log(nombre ? true : false); //Debería de dar false porque la variable nombre no esta definida.
    //ahora vamos a usarlo con "if" que es otra forma diferente pero igual de válida.
    if (nombre) { //Al no estar definido, su resultado es "false".
        console.log("true"); //Esta respuesta no la aceptaría el "if".
    } else {
        console.log("false"); //Esta respuesta la aceptaría el "if".
    }
}

//Ejercicio 3.5(1)
const arraysUni1 = () => {
    function tresCinco() {
        let vector = []; //También se puede hacer let vector = new Array();
        vector[0] = 55;
        vector[1] = 88;
        vector[2] = 6;

        // Esto es para comprobarlo.

        for (let i = 0; i < vector.length; i++) {
            console.log(`${vector[i]}`);
        }
    }

    tresCinco();
}

//Ejercicio 3.5(2)
const arraysUni2 = () => {
    function tresCinco() {
        let arr = ["2", "20", "200", "2000"];

        for (let i = 0; i < arr.length < 500; i++) {
            console.log(i);
        }
        /*
          También se puede colocar así.
          for (const arrKey in arr) {
              console.log(arrKey);
          }
          */
    }

    tresCinco();
}

//Ejercicio 3.5(3)
const arraysMulti = () => {
    function tresCinco() {
        let actividades = [
            ['correr', 9],
            ['saltar', 1],
            ['trabajar', 2],
            ['dormir', 1],
            ['escribir', 7]
        ];
    }

    tresCinco();
}

//Ejercicio 3.5(4)
const arraysBidi = () => {
    function tresCinco() {
        let actividades = [
            ['correr', 9],
            ['saltar', 1],
            ['trabajar', 2],
            ['dormir', 1],
            ['escribir', 7]
        ];

        //Esto es una forma:
        for (const i in actividades) {
            for (const j in actividades[i]) {
                console.table(`[ ${i} , ${j} ] = ${actividades[i][j]}`);
            }
        }

        /* Para ponerlo bonito en una línea
        let linea = "";
        for (let i = 0; i < actividades.length; i++) {
            for (let j = 0; j < actividades[i].length; j++) {
                linea += actividades[i][j] + " ";
                console.log(linea);
                linea = "";
            }
            */

        /* Con el foreach
        actividades.foreach(activity) => {
        actividades.foreach(data) => {
            console.log(data);
            }
        }
        console.table
         */

        /*
        //Esto es otra forma:

        for (let i = 0; i < actividades.length; i++) {
            let innerArrayLength = actividades[i].length;
            for (let j = 0; j < innerArrayLength; j++) {
                console.log(`[ ${i} , ${j} ] = ${actividades[i][j]}`);
            }

        }
         */
    }

    tresCinco();
}

const arraysClonacion = () => {
    let arr = [3, 5, 9, 10, 15, 14];

    //Hay 2 formas:
    let copiaArr1 = Object.assign(arr);

    //Mejor esta:
    let copiaArr2 = JSON.parse(JSON.stringify(arr));


    for (const copiaArrElement of copiaArr1) {
        console.log(copiaArrElement);
    }
    console.table(copiaArr2);
}

const conversionTipos = () => {
    let num = "300"; //Es un número en una cadena de texto.
    let num2 = "400.54" //Es un número en una cadena de texto.
    let num3 = 500 //Esto es un número entero.
    let n = parseInt(num); //Convierte numero entero.
    let n2 = parseFloat(num2); //Almacena un decimal.
    //Permite poner cuántos decimales poner.
    let n3 = parseFloat(num2).toFixed(1);
    let n4 = num3.toString(); //Almacena una cadena.
}

const usoEstricto = () => {
    /*
    //Ejemplo 1:
  "use strict"
    pi = 3.14; // Da error. Al ser uso estricto se debe de poner el tipo de la variable.
    functionPrueba();

    function functionPrueba(){
        piBIS = 3.14; // Da error
    }
     */

    //Ejemplo 2:
    let pi = 3.14 //No da error
    funcionPrueba();

    function funcionPrueba() {
        "use strict";
        console.log(pi);
        let piNew = 3.141592 //No da error.
        console.log(piNew);
    }

}

/*
*@utor Jesús María Olalla Pérez.
* 2ºDAW
* Desarrollo web en entorno cliente.
*  */












