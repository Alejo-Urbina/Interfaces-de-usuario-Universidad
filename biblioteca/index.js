
document.getElementById("cambiarColorBtn").addEventListener("click", function () {
    var colorHex = '#' + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = colorHex;
});

document.getElementById("textoCambiante").addEventListener("mouseover", function () {
    this.textContent = "¡El texto cambió!";
});

document.getElementById("textoCambiante").addEventListener("mouseout", function () {
    this.textContent = "Pasa el mouse aquí para cambiar el texto.";
});

document.getElementById("toggleBtn").addEventListener("click", function () {
    var contenidoDiv = document.getElementById("contenidoOculto");
    contenidoDiv.style.display = contenidoDiv.style.display === "none" ? "block" : "none";
});