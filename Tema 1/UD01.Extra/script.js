/*
* @utor Jesús María Olalla Pérez.
* 2º DAW
* Desarrollo web en entorno cliente.
*/

// Hay 2 maneras de hacerlo:

// La primera manera, con escuchadores:

function init() {

    document.getElementById("pulsador").addEventListener("click", function () {
        cambiarTexto();
    });

}

function cambiarTexto() {
    document.getElementById('texto').innerHTML = "<p style='color:red'><h1>¡Hola mundo!</h1></p>";
}


//La segunda manera es hacerlo mediante variables:

/*
function init() {

    let pulsador = document.getElementById('pulsador');

    pulsador.onclick = function (e) {
        cambiarTexto();
    }
  }

  function cambiarTexto() {
    document.getElementById('texto').innerHTML = "<p style='color:red'><h1>¡Hola mundo!</h1></p>";
}
    */
