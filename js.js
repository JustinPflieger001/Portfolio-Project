function d_open() {
    document.getElementById("dropdown").style.display = "block";
    document.getElementById("dropup").style.display = "none";
}
function d_close() {
    document.getElementById("dropdown").style.display = "none";
    document.getElementById("dropup").style.display = "block";
}

function animation() {
    document.getElementById("dropdown").classList.remove('w3-animate-top');
    document.getElementById("dropdown").classList.add('w3-animate-bottom');
}