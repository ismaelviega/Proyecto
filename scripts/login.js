document.getElementById("submit").addEventListener('click', validate, false);

var user = {"User" : "admin", "Password" : "Administrador20"};
sessionStorage.setItem("user", JSON.stringify(user));

function validate(event){
    validatePassword();
    validateUser();

    if (validateUser() == true && validatePassword() == true){
        var sPage = localStorage.getItem("parentPage");
        
        if (sPage.substring(sPage.length, sPage.lastIndexOf("/") + 1) == "shoppingcart.html"){
            var fFormulario = document.forms["form"];
            fFormulario.action = "pinformation.html";
            fFormulario.submit();
        } else {
            var fFormulario = document.forms["form"];
            fFormulario.action = "../index.html";
            fFormulario.submit();
        } 
    } else {
        event.preventDefault();
    }
}

function validateUser(){
    var sUser = document.getElementById("user").value;
    var bEsCorrecto = false;

    if (Number(sUser.length) == 0){
        document.getElementById("user").style.border = "0.05em solid #ff000093";
        document.getElementById("user").focus();
    } else {
        for (var i = 0; i < sessionStorage.length; i++){
            key = sessionStorage.key(i);
            if (key.includes("user")){
                if (JSON.parse(sessionStorage.getItem(key)).User != sUser){
                    document.getElementById("user").style.border = "0.05em solid #ff000093";
                    document.getElementById("user").focus();
                } else {
                    document.getElementById("user").style.border = "0.05em solid #07243293";
                    bEsCorrecto = true;
                }
            }
        }  
    }

    return bEsCorrecto;
}

function validatePassword(){
    var sPasswordUser = document.getElementById("passwordUser").value;
    var rExpresion = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/
    var bEsCorrecto = false;

    if (Number(sPasswordUser.length) == 0){
        document.getElementById("passwordUser").style.border = "0.05em solid #ff000093";
        document.getElementById("passwordUser").focus();
    } else if (rExpresion.test(sPasswordUser) == false){
        document.getElementById("passwordUser").style.border = "0.05em solid #ff000093";
        document.getElementById("passwordUser").focus();
    } else {
        for (var i = 0; i < sessionStorage.length; i++){
            key = sessionStorage.key(i);
            if (key.includes("user")){
                if (JSON.parse(sessionStorage.getItem(key)).Password != sPasswordUser){
                    document.getElementById("passwordUser").style.border = "0.05em solid #ff000093";
                    document.getElementById("passwordUser").focus();
                } else {
                    document.getElementById("passwordUser").style.border = "0.05em solid #07243293";
                    bEsCorrecto = true;
                }
            }
        }   
    }

    return bEsCorrecto;
}