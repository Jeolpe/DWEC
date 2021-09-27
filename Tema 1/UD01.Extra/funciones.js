function init() {
    // Añadiendo Listeners(Escuchadores)
    /*
    let pulsador = document.getElementById('pulsador');

    pulsador.onclick = function (e) {
        cambiarTexto();
    }
    */

    // Añadiendo Listeners(Escuchadores)
    document.getElementById("pulsador").addEventListener("click", function () {
        cambiarTexto();
    });

}

function cambiarTexto() {
    document.getElementById('texto').innerHTML = "<p style='color:black'><h1>¡Hola mundo!</h1></p>";
}