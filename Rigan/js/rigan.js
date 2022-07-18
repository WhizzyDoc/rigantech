const opennav = document.getElementById("w-opennav");
opennav.onclick = function() {
    document.getElementById("w-sidenav").style.display = "block";
}

const closenav = document.getElementById("w-closenav");
closenav.onclick = function() {
    document.getElementById("w-sidenav").style.display = "none";
}