
document.getElementById("cambiarColorBtn").addEventListener("click", function () {
    var colorHex = '#' + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = colorHex;
});