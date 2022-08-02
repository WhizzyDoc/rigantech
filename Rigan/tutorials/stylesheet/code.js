var html = document.getElementById("html");
var css = document.getElementById("css");
var output = document.getElementById("output");
var header = document.getElementById("header");
var color = document.getElementById("color");
var rgb = document.getElementById("rgb");

function runCode() {
    output.innerHTML = html.value;
    document.getElementById("style").innerHTML = css.value;
}

function hexToRgb() {
    let Color = color.value;
    let x = [];
    color = Color.replace('#', '')
    x.push(parseInt(color.slice(0, 2), 16))
    x.push(parseInt(color.slice(2, 4), 16))
    x.push(parseInt(color.slice(4, 6), 16))
    rgb.innerHTML = "rgb(" + x.toString() + ")";
}