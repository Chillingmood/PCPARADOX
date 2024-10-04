function cambia() {
    var i = Math.floor(Math.random() * 10);
    var ximagen = "imagen/" + i + ".jpg";
    document.getElementById("fotocambia").src = ximagen;
}

function inicio() {
    setInterval(cambia,1000); // Cambia la imagen cada 2 segundos
}

// Evento que se ejecuta al mostrar la página
window.onload = inicio;