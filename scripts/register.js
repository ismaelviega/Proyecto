document.getElementById("submit").addEventListener('click', register, false);

function register(event){
    acceptConditions();
    confirmedPassword();
    validatePassword();
    validateEmail();
    validateUser();

    if (validateUser() == true && validateEmail() == true && validatePassword() == true &&
        confirmedPassword() == true && acceptConditions() == true){
            var user = {"User" : JSON.parse(localStorage.getItem("nameUser")), "Password" : JSON.parse(localStorage.getItem("passwordUser"))};
            sessionStorage.setItem("user" + sessionStorage.length , JSON.stringify(user));
            
            var fFormulario = document.forms["form"];
            fFormulario.action = "../index.html";
            alert("Has sido registrado con éxito!");

            fFormulario.submit();
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
                if (JSON.parse(sessionStorage.getItem(key)).User == sUser){
                    document.getElementById("user").style.border = "0.05em solid #ff000093";
                    document.getElementById("user").focus();
                } else {
                    document.getElementById("user").style.border = "0.05em solid #07243293";
                    localStorage.setItem("nameUser", JSON.stringify(sUser));
                    bEsCorrecto = true;
                }
            }
        }  
    }

    return bEsCorrecto;
}

function validateEmail(){
    var sEmail = document.getElementById("email").value;
    var rExpresion = /^[^@]+@[^@]+\.\w{2,4}$/;
    var bEsCorrecto = false;

    if (Number(sEmail.length) == 0){
        document.getElementById("email").style.border = "0.05em solid #ff000093";
        document.getElementById("email").focus();
    } else if (rExpresion.test(sEmail) == false){
        document.getElementById("email").style.border = "0.05em solid #ff000093";
        document.getElementById("email").focus();
    } else {
        document.getElementById("email").style.border = "0.05em solid #07243293";
        bEsCorrecto = true;
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
        document.getElementById("passwordUser").style.border = "0.05em solid #07243293";
        bEsCorrecto = true;
    }

    return bEsCorrecto;
}

function confirmedPassword(){
    var sPassword = document.getElementById("passwordUser").value;
    var spasswordConfirmedUser = document.getElementById("passwordConfirmedUser").value;
    var bEsCorrecto = false;

    if (Number(spasswordConfirmedUser.length) == 0){
        document.getElementById("passwordConfirmedUser").style.border = "0.05em solid #ff000093";
        document.getElementById("passwordConfirmedUser").focus();
    } else if (sPassword != spasswordConfirmedUser){
        document.getElementById("passwordUser").style.border = "0.05em solid #ff000093";
        document.getElementById("passwordConfirmedUser").style.border = "0.05em solid #ff000093";
        document.getElementById("passwordUser").focus();
        document.getElementById("passwordConfirmedUser").focus();
    } else {
        document.getElementById("passwordConfirmedUser").style.border = "0.05em solid #07243293";
        document.getElementById("passwordUser").style.border = "0.05em solid #07243293";
        localStorage.setItem("passwordUser", JSON.stringify(sPassword));
        bEsCorrecto = true;
    }

    return bEsCorrecto;
}

function acceptConditions(){
    var cAcceptConditions = document.getElementById("acceptConditions").checked;
    var bEsCorrecto = false;

    if (cAcceptConditions == false){
        document.getElementById("conditions").style.color = "red"; 
    } else {
        document.getElementById("conditions").style.color = "#072432"; 
        bEsCorrecto = true;
    }

    return bEsCorrecto;
}


