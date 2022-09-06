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

function hexToRgb(color) {
    let Color = color.value;
    let x = [];
    color = Color.replace('#', '')
    x.push(parseInt(color.slice(0, 2), 16))
    x.push(parseInt(color.slice(2, 4), 16))
    x.push(parseInt(color.slice(4, 6), 16))
    rgb.innerHTML = "rgb(" + x.toString() + ")";
}

flag = 1;
var showMore = document.getElementById("showMore");
showMore.onclick = function() {
    if(flag==1) {
        document.getElementById("w-more").style.display = "block";
        showMore.style.backgroundColor = "white";
        showMore.style.color = "black";
        flag = 0;
    }
    else {
        document.getElementById("w-more").style.display = "none";
        showMore.style.backgroundColor = "#446003";
        showMore.style.color = "white";
        flag = 1;
    }
}
function closeMore() {
    document.getElementById("w-more").style.display = "none";
    flag = 1;
}