/*
*@utor Jesús María Olalla Pérez.
* 2ºDAW
* Desarrollo web en entorno cliente.
*  */


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

