function redirect() {
    myvar = setTimeout(2000, login());
}

function login() {
    window.location.href="login/login.html";
}

var password = document.getElementById("password");
var email = document.getElementById("email");
function validateForm(){
   if(password.value == "") {
       alert("enter password");
       return false;
   }
    else if(password.value == "7084359806") {
        window.location.replace("../index.html");
    } else {
        alert("Incorrect Password");
        return false;
    }
}
