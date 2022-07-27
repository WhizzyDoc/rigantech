/* creating a variable named myVar */
var myVar;

/* defining the function myFunction for when the page loads */
function myFunction() {
    myVar = setTimeout(showPage, 2000); /* sets a time delay before a funtion showPage (text content) begins */
}

/* defining the showPage funtion */
function showPage() {
    document.getElementById("container").style.display = "flex"; /* and then the text appears */
}
