// Actividad 1
//Este ejercicio lo hicimos en clase por eso no he puesto "onclick".
const inicio = () => {
    const actividad1 = document.getElementById("actividad1");
    actividad1.addEventListener('click', (e) => {
        // Desde la consola.
        console.log("¡Hola Mundo!");

        // Desde una ventana emergente.
        alert("¡Hola Mundo!");
        document.getElementById('texto').innerHTML = "<p class='holaMundo'>¡Hola mundo!</p> <button id='borrar'>Borrar</button>";
        document.getElementById("borrar").addEventListener("click", (e) => {
            location.reload();
        });
    });
}
window.onload = inicio;

// Actividad 2.1
const actividad21 = () => {
    //Definimos las variables que vamos a utilizar
    let numero = [];
    let i = 0;
    let respuesta;
    let contador = 0;

    //Bucle preguntando por los números. Una vez nos da el usuario el número lo metemos en un array.
    //Además hemos metido un contador para saber el número exacto de números que son mayores que 10
    do {
        numero[i] = prompt(`Escribe un número para saber si es mayor que 10`);
        (numero[i] > 10) ? contador++ : contador;
        i++;
        respuesta = confirm(`¿Desea continuar?`);
    } while (respuesta === true);

    //Lo presentamos por pantalla con el uso del contador y la función filter(dentro de ella hacemos un callback).
    console.log(`Hay ${contador} números mayores que 10. Que son: ${(numero.filter(aux => aux > 10))}`);
}


// Actividad 2.2
const actividad22 = () => {
    //Definimos las variables que vamos a utilizar.
    let fecha;
    //Variable que sirve como expresión regular para obligar al usuario a escribir el formato "dd/mm".
    let patron = /^\d{2}\/\d{2}$/;

    //Función para que sea una fecha real.
    // d + d <= 31 y m + m <= 12.
    const fechaValida = (fecha) => {
        let esValida;
        (fecha.charAt(0) + fecha.charAt(1) <= 31) && (fecha.charAt(3) + fecha.charAt(4) <= 12) ? esValida = true : esValida = false;
        return esValida;
    }

    //Bucle:
    do {
        //Le preguntamos al usuario sobre la fecha
        fecha = prompt(`Escriba una fecha de este año: `);
        //Le indicamos al usuario que ha hecho mal.
        if (!patron.test(fecha)) {
            alert(`Escribe un formato válido para la fecha: dd/mm`);
        } else if (!fechaValida(fecha)) {
            alert(`Escribe una fecha válida`);
        }
        //sino cumple con los requisitos le volvemos a preguntar.
    } while (!patron.test(fecha) || !fechaValida(fecha));

    //Condicional para saber si es Navidad.
    (fecha === "25/12") ? console.log(`¡Es Navidad!`) : console.log(`No es Navidad`);

}

// Actividad 2.3
const actividad23 = () => {
    //Definimos las variables
    let sueldo;
    let antiguedad;
    //Para comprobar si sueldo y antigüedad son números (Lo he hecho diferente a expresiones regulares porque quería probarlo así).
    do {
        sueldo = parseInt(prompt(`Escriba su sueldo: `));
        antiguedad = parseInt(prompt(`Escriba su antigüedad: `));
        if (isNaN(sueldo) || isNaN(antiguedad)) alert(`Valor incorrecto. Solo se permite número`);
    } while (isNaN(sueldo) || isNaN(antiguedad));


    //Aquí ponemos las condiciones. (He querido poner condicionales con el operador ternario).
    (sueldo < 500 && antiguedad > 10) ? console.log(`Su sueldo de ${sueldo}€ ha pasado a ser ${sueldo * 3}€`) : ((sueldo < 500 && antiguedad < 10) ? console.log(`Su sueldo de ${sueldo}€ ha pasado a ser ${sueldo * 2}€`) : console.log(`Su sueldo se queda en ${sueldo}€`));
}


// Actividad 2.4
const actividad24 = () => {
    //Definimos las variables
    let nota;
    //Variable que sirve como expresión regular para obligar al usuario a escribir números y como opcional con decimales(Porque las notas puede ir con decimales).
    let patron = /^[0-9]+([.][0-9]{1,2})?$/;
    //bucle para obligar al usuario a escribir números.
    do {
        nota = prompt(`Escriba la nota que ha sacado: `);
        if (!patron.test(nota)) alert(`Debe de escribir un número válido`);
    } while (!patron.test(nota));


    //Aquí ponemos las condiciones.
    if (nota >= 1 && nota < 3.0) {
        console.log(`Usted ha sacado un ${nota} lo que equivale a un muy deficiente`);
    } else if (nota >= 3.0 && nota < 5.0) {
        console.log(`Usted ha sacado un ${nota} lo que equivale a un insuficiente`);
    } else if (nota >= 5.0 && nota < 6.0) {
        console.log(`Usted ha sacado un ${nota} lo que equivale a un bien`);
    } else if (nota >= 6.0 && nota < 9.0) {
        console.log(`Usted ha sacado un ${nota} lo que equivale a un notable`);
    } else if (nota >= 9.0 && nota < 10.0) {
        console.log(`Usted ha sacado un ${nota} lo que equivale a un sobresaliente`);
    }
}


// Actividad 3.1
const actividad31 = () => {

    //Le preguntamos al usuario por el límite de la secuencia.
    let numero = parseInt(prompt(`Escribe el límite de la secuencia: `));
    let numeros = [];

    //Esto es por el método "FOR".

    for (let i = 2; i <= numero; i++) {
        if (i % 2 === 0) console.log(`${i}`);
    }


    /*Eso es por el método "WHILE".
    let aux = 1;
    let i = 2;
    while (aux <= numero) {
        if (i % 2 === 0) console.log(`${i}`);
        aux++;
        i++;
    }


     Esto es por el método "DO WHILE".
    let aux = 1;
    let i = 2;
     do {
         if (i % 2 === 0) console.log(`${i}`);
         aux++;
         i++;
     } while (aux < numero);

     */

    alert(`En el código puedes ver como también se ha realizado con "WHILE", "DO WHILE".`);
}


// Actividad 3.2
const actividad32 = () => {
    //Le preguntamos al usuario por el límite de la secuencia.
    let numero = parseInt(prompt(`Escribe el límite de la secuencia: `));
    //Hacemos la secuencia hasta el límite que ha puesto el usuario.

    //Esto es por el método "FOR".
    for (let i = 1; i <= numero; i++) {
        if (i % 2 !== 0) console.log(`${i}`);
    }

    /*Esto es por el método "WHILE".
    let i = 1;
    let count = 1;
    while (count <= numero){
        if (i % 2 !== 0) console.log(`${i}`);
        count++;
        i++;
    }


    Esto es por el método "DO WHILE".
    let i = 1;
    do {
        if (i % 2 !== 0) console.log(`${i}`);
        count++;
        i++;
    }while(count <= numero);

     */

    alert(`En el código puedes ver como también se ha realizado con "WHILE" y "DO WHILE"`);
}


// Actividad 3.3
const actividad33 = () => {
    //Le pregunta al usuario.
    let numero = prompt(`Escribe un número para la tabla de multiplicar: `);

    //Bucle para poner la tabla de multiplicar.
    for (let i = 1; i < 10; i++) {
        //DOM que llama al ID y escuchador.
        document.getElementById("actividad33").addEventListener("click", mostrarMultiplicacion());

        //imprime en el html código.
        function mostrarMultiplicacion() {
            document.getElementById("texto2").innerHTML += `<p class="tablaMultiplicar">${numero} * ${i} = ${numero * i}</p> `;

            //Espera que sea la última línea para introducir el botón "borrar" en el HTML.
            if (i >= 9) {
                document.getElementById("texto2").innerHTML += `<button id='borrar2'>Borrar</button>`;

            }
        }

    }

    //DOM para el botón borrar. Llama a la función y actúa.
    document.getElementById("borrar2").addEventListener("click", (e) => {
        location.reload()
    });
}


// Actividad 3.4
const actividad34 = () => {
    // Obtener la referencia del elemento body
    let body = document.querySelector("#actividad34");

    // Crea un elemento <table> y un elemento <tbody>
    let tabla = document.createElement("table");
    let tablaBody = document.createElement("tbody");

    let preguntaFila = prompt(`¿Cuántas columnas desea visualizar?`);
    let preguntaColumna = prompt(`¿Cuántas filas desea visualizar?`);

    // Crea las celdas
    for (let i = 0; i < preguntaFila; i++) {
        // Crea las hileras de la tabla
        let fila = document.createElement("tr");

        for (let j = 0; j < preguntaColumna; j++) {
            // Crea un elemento <td> y un nodo de texto, haz que el nodo de
            // texto sea el contenido de <td>, ubica el elemento <td> al final
            // de la hilera de la tabla
            let columna = document.createElement("td");
            let textoColumna = document.createTextNode(`fila ${i + 1}, columna ${j + 1}`);
            columna.appendChild(textoColumna);
            fila.appendChild(columna);
        }

        // agrega la hilera al final de la tabla (al final del elemento tablaBody)
        tablaBody.appendChild(fila);
    }

    // posiciona el <tbody> debajo del elemento <table>
    tabla.appendChild(tablaBody);
    // appends <table> into <body>
    body.appendChild(tabla);
    // modifica el atributo "border" de la tabla y lo fija a "2";
    tabla.setAttribute("border", "3");
}


// Actividad 3.5
const actividad35 = () => {
    //Pregunta al usuario.
    let numero = parseInt(prompt(`Escribe un número para saber si es número primo: `));

    // Función que dice si es Primo o no es Primo.
    const esPrimo = (n) => {
        let Primo = true;

        //Porque 0 y 1 no son primos.
        if (n === 0 || n === 1) {
            Primo = false;
        } else {
            //Bucle para comprobar si son primos
            for (let i = 2; i < n && Primo === true; i++) {
                if (n % i === 0) Primo = false;
            }
        }

        return Primo
    }

//Invoca la función e imprime resultado.
    (esPrimo(numero)) ? console.log("Es primo") : console.log("No es primo");

}


// Actividad 4.1
const actividad41 = () => {
    //Le pregunto al usuario.
    let operando1 = parseInt(prompt(`Escriba el primer número: `));
    let operando2 = parseInt(prompt(`Escriba el segundo número: `));

    //Función para la suma de los números.
    const sumaDeNumeros = (n1, n2) => n1 + n2;

    //Mostramos el resultado por pantalla.
    console.log(`La suma de los números ${operando1} + ${operando2} es ${sumaDeNumeros(operando1, operando2)}`);
}


// Actividad 4.2
const actividad42 = () => {
    //Le preguntamos al usuario sobre un año.
    let year = parseInt(prompt(`Escriba un año: `));

    //Función booleana para saber si es o no Bisiesto.
    const esBisieto = (n) => {
        let Bisiesto = false;
        for (let i = 0; i <= n; i += 4) {
            if (n === i) Bisiesto = true;
        }
        return Bisiesto;
    }

    //Condiciones y presentamos por pantalla
    (esBisieto(year)) ? console.log(`El año ${year} "SI" es bisiesto`) : console.log(`El año ${year} "NO" es bisiesto`);

}

// Actividad 4.3
const actividad43 = () => {
    //Creamos las variables
    let lado1;
    let lado2;

    //Bucle para comprobar que no es un cuadrado, es decir, que los 2 lados que pido no sean iguales.
    do {
        lado1 = parseFloat(prompt(`Escriba la altura del rectángulo: `));
        lado2 = parseFloat(prompt(`Escriba la base del rectángulo: `));

        if (lado1 === lado2) alert(`¡Error! La altura no puede valer igual que la base sino sería un cuadrado`);

    } while (lado1 === lado2);

    //Creamos la función para calcular el perimetro.
    const calcularPerimetro = (a, b) => (2 * a) + (2 * b);

    //Presentamos por pantalla.
    console.log(`El Perimetro del rectagunlo cuya altura vale ${lado1} y su base ${lado2} es ${calcularPerimetro(lado1, lado2)}`);
}


// Actividad 4.4
const actividad44 = () => {
    //Creamos la variable y le pregunto al usuario.
    let numero = parseInt(prompt(`Escriba un número para saber su secuencia secuencial: `));

    //Función que obtiene la secuencia factorial y el resultado.
    const secuenciaFactorial = (n) => {
        let secuencia = "";
        let num = n;
        for (let i = 1; i < n; i++) {
            //Vamos obteniendo la secuencia factorial.
            secuencia += i + ", ";
            //Vamos obteniendo el resultado de la secuencia factorial.
            num *= i;
        }
        //Le sumamos el resultado a toda la secuencia factorial
        secuencia += num;
        return secuencia;
    }

    //Presentamos por pantalla.
    console.log(`${numero}! = ${secuenciaFactorial(numero)} `);
}

//----------------------------------------------------------------------

// Actividades con clases y objetos

// ACTIVIDAD 1. CLASES. TELÉFONOS Y PERSONAS
const actividad01 = () => {
    //Clase
    class telefono {
        //Constructor
        constructor(marca, modelo, color) {
            this.marca = marca;
            this.modelo = modelo;
            this.color = color;
        }
    }

    //Creamos 2 instancias
    const telefono1 = new telefono("Samsung", "Galaxy S4", "Negro");
    const telefono2 = new telefono("Apple", "Iphone 13", "Rojo");
    let respuesta;

    //Bucle donde le preguntamos al usuario que marca le gust más(No lo pide el ejercicio pero he querido hacerlo un poco más completo),
    do {
        respuesta = prompt(`¿Que marca te gusta más?`);
        respuesta = respuesta.toLowerCase();
        if (respuesta === "apple") {
            console.log(`Me he comprado el nuevo teléfono de ${telefono2.marca} que es el ${telefono2.modelo} de color ${telefono2.color}`);
        } else if (respuesta === "samsung") {
            console.log(`Me he comprado el nuevo teléfono de ${telefono1.marca} que es el ${telefono1.modelo} de color ${telefono1.color}`);
        } else {
            alert(`Usted debe de poner una de estas 2 marcas: ${telefono1.marca} o ${telefono2.marca}`);
        }
    } while (respuesta !== "samsung" && respuesta !== "apple");


//Clase
    class persona {
        //Constructor.
        constructor(nombre, apellidos, edad, sexo) {
            this.nombre = nombre;
            this.apellidos = apellidos;
            this.edad = edad;
            this.sexo = sexo;
        }

        //método.
        nombreCompleto() {
            return `Mi nombre es ${this.nombre} ${this.apellidos}`;
        }
    }

    //Creamos 2 instancias.
    const persona1 = new persona("Jesus", "Olalla Perez", 27, "Hombre");
    const persona2 = new persona("Alicia", "Santiago Sanchez", 31, "Mujer");

    //Se presenta en la pantalla.
    console.log(persona1.nombreCompleto());
    console.log(persona2.nombreCompleto());
}

// ACTIVIDAD 2. MÉTODOS SET Y GET. TELÉFONOS: MARCAS Y MODELOS (I)
const actividad02 = () => {

    //Clase
    class telefono {
        //Constructor
        constructor(marca, modelo, color) {
            this.color = color;
            this.marca = marca;
            this.modelo = modelo;
        }

        //Creamos los getters and setters
        get getMarca() {
            return this.marca;
        }

        set setMarca(value) {
            this.marca = value;
        }

        get getModelo() {
            return this.modelo;
        }

        set setModelo(value) {
            this.modelo = value;
        }
    }

    //Instancias.
    const Telefono1 = new telefono("Xiaomi", "Mi 8", "rojo");
    const Telefono2 = new telefono("One Plus", "One Plus 9", "Azul");

    //Cambiamos la Marca con el método setter.
    Telefono1.setMarca = "Sony";
    Telefono2.setMarca = "Huawei";

    //Presentamos por pantalla.
    console.log(`Me he comprado el nuevo modelo de ${Telefono1.getMarca} y es el ${Telefono1.getModelo}`);
    console.log(`Mañana sale el ${Telefono2.getModelo} de la marca ${Telefono2.getMarca}`);
}


// ACTIVIDAD 3. HERENCIA. MARCAS Y MODELOS (II)
const actividad03 = () => {
    //Clase.
    class telefono {

        //Constructor.
        constructor(marca, color, precio) {
            this.marca = marca;
            this.color = color;
            this.precio = precio;
        }

        //Método getter para el anuncio.
        anuncio() {
            return `La marca ${this.marca} está disponible `;
        }
    }

    //Clase heredada.
    class modelo extends telefono {

        //constructor.
        constructor(marca, color, precio, modelo) {
            super(marca, color, precio);
            this.modelo = modelo;
        }

        //Método getter para anuncio completo.
        anuncioCompleto() {
            return `El ${this.anuncio()} de ${this.marca} está ya a la venta`;
        }

    }

    //instancias.
    const telephone1 = new modelo("Apple", "morado", 999, "Iphone 13");
    const telephone2 = new modelo("Samsung", "Verde", 850, "Galaxy S4");

    //Llamamos al método getter y presentamos por pantalla.
    console.log(telephone1.anuncio());
    console.log(telephone1.anuncioCompleto());
    console.log(telephone2.anuncio());
    console.log(telephone2.anuncioCompleto());
}


// ACTIVIDAD 4. MÉTODOS ESTÁTICOS. ÁREAS Y PERÍMETROS DE UN RECTÁNGULO
const actividad04 = () => {
    //Clase.
    class rectangulo {

        //Constructor.
        constructor(base, altura) {
            this.base = base;
            this.altura = altura;
        }

        //Métodos estáticos.
        static calcularArea(b, h) {
            return b * h;
        }

        static calcularPerimetro(b, h) {
            return (2 * b) * (2 * h);
        }
    }

    //Instancias.
    const rectangulo1 = new rectangulo(5, 17);
    const rectangulo2 = new rectangulo(6, 18);

    //Presentamos por pantalla.
    console.log("Rectángulo 1: ");
    console.log(`El Área es ${rectangulo.calcularArea(rectangulo1.base, rectangulo1.altura)}`);
    console.log(`El Perimetro es ${rectangulo.calcularPerimetro(rectangulo1.base, rectangulo1.altura)}`);
    console.log("Rectángulo 2: ");
    console.log(`El Área es ${rectangulo.calcularArea(rectangulo2.base, rectangulo2.altura)}`);
    console.log(`El Perimetro es ${rectangulo.calcularPerimetro(rectangulo2.base, rectangulo2.altura)}`);
}


// ACTIVIDAD 5. EJERCICIO TODO EN UNO.
const actividad05 = () => {

    class Vehiculo {
        //Constructor
        constructor(color, marca, modelo, velocidadMax) {
            this.color = color;
            this.marca = marca;
            this.modelo = modelo;
            this.velocidadMax = velocidadMax;
        }

        //Métodos
        comenzar() {
            return `Encender motor`;
        }

        parar() {
            return `parar motor`;
        }

        distanciaMax(tiempo) {
            return this.velocidadMax * tiempo;
        }
    }

    //Clase Coche que hereda de vehículo
    class Coche extends Vehiculo {
        //Constructor heredado excepto la velocidad Máxima.
        constructor(color, marca, modelo) {
            super(color, marca, modelo);
            this.velocidadMax = 120;
        }

        //Método que sobreescribe el método anterior.
        parar() {
            return `aparcar`;
        }
    }

    //Clase Avión que hereda de Vehiculo
    class Avion extends Vehiculo {

        //Constructor heredado excepto la velocidad Máxima.
        constructor(color, marca, modelo) {
            super(color, marca, modelo);
            this.velocidadMax = 1000;
        }

        //Métodos que sobreescriben los métodos anteriores
        comenzar() {
            return `Despegar`;
        }

        parar() {
            return `aterrizar`;
        }

    }

    //Crea las instancias
    const vehiculo1 = new Vehiculo("Blanco", "Honda", "CB1000R", 150);
    const coche1 = new Coche("Negro", "BMW", "M3");
    const avion1 = new Avion("Azul", "Boeing", "747-700X");


    //Presentamos en pantalla con unos ejemplos
    console.log("Vehículo(Moto): ")
    console.log(`Mi padre me ha regalado una ${vehiculo1.marca} ${vehiculo1.modelo} de color ${vehiculo1.color} y puede correr hasta ${vehiculo1.velocidadMax}KM/H`);
    console.log(vehiculo1.comenzar());
    console.log(vehiculo1.parar());
    console.log(`La distancia máxima que puede alcanzar en 2 horas es ${vehiculo1.distanciaMax(2)}KMs`);
    console.log(" ");


    console.log("Coche: ");
    console.log(`Me he comprado un ${coche1.marca} ${coche1.modelo} de color ${coche1.color} y puede correr hasta ${coche1.velocidadMax}Km/H`);
    console.log(coche1.comenzar());
    console.log(coche1.parar());
    console.log(`La distancia máxima que puede alcanzar en 2 horas es ${coche1.distanciaMax(2)}KMs`);
    console.log(" ");


    console.log("Avión: ");
    console.log(`En mi casa de Marbella tengo un ${avion1.marca} ${avion1.modelo} de color ${avion1.color} y puede volar hasta ${avion1.velocidadMax}KM/H`);
    console.log(avion1.comenzar());
    console.log(avion1.parar());
    console.log(`La distancia máxima que puede alcanzar en 1 hora es ${avion1.distanciaMax(1)}KMs`);
}

/*
 @utor Jesús María Olalla Pérez.
 2º DAW
 Desarrollo web en entorno cliente.
 */





