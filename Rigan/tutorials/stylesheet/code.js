var html = document.getElementById("html");
var css = document.getElementById("css");
var output = document.getElementById("output");
var header = document.getElementById("header");

function runCode() {
    output.innerHTML = html.value;
    document.getElementById("style").innerHTML = css.value;
}

