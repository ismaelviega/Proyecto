var user = {"User" : "admin", "Password" : "Administrador20"};
sessionStorage.setItem("user", JSON.stringify(user));

document.getElementById("modifyPassword").addEventListener('click', modifyPassword, false);

function modifyPassword(event){
    confirmedPassword();
    validatePassword();
    checkOldPassword(event);
    validateUser();

    if (checkOldPassword() == true && validatePassword() == true && confirmedPassword() == true){
            var user = {"User" : localStorage.getItem("nameUser"), "Password" : localStorage.getItem("newPassword").substring(1, localStorage.getItem("newPassword").length - 1)};
            sessionStorage.setItem("user", JSON.stringify(user));
            
            var fFormulario = document.forms["form"];
            fFormulario.action = "../index.html";
            alert("La contraseña se ha modificado con éxito!");

            fFormulario.submit();
    } else {
        event.preventDefault();
    }
}

function validateUser(){
    var iUser = sessionStorage.length - 1;

    if (iUser == 1){
        var sUserConfirmed = "user";
    } else {
        var sUserConfirmed = "user".concat(iUser);
    }

    localStorage.setItem("nameUser", JSON.parse(sessionStorage.getItem(sUserConfirmed)).User);
}


function checkOldPassword(event){
    var bEsCorrecto = false;
    var iUser = sessionStorage.length - 1;

    if (iUser == 1){
        var sUserConfirmed = "user";
    } else {
        var sUserConfirmed = "user".concat(iUser);
    }
    
    var sPasswordOld = JSON.parse(sessionStorage.getItem(sUserConfirmed)).Password;
    var sPasswordNew = document.getElementById("oldPassword").value;

    if (sPasswordOld != sPasswordNew){
        document.getElementById("oldPassword").style.border = "0.05em solid #ff000093";
        document.getElementById("oldPassword").focus();
    } else {
        document.getElementById("oldPassword").style.border = "0.05em solid #07243293";
        bEsCorrecto = true;
    }


    return bEsCorrecto;
}

function validatePassword(){
    var sPasswordUser = document.getElementById("newPassword").value;
    var rExpresion = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/
    var bEsCorrecto = false;

    if (Number(sPasswordUser.length) == 0){
        document.getElementById("newPassword").style.border = "0.05em solid #ff000093";
        document.getElementById("newPassword").focus();
    } else if (rExpresion.test(sPasswordUser) == false){
        document.getElementById("newPassword").style.border = "0.05em solid #ff000093";
        document.getElementById("newPassword").focus();
    } else {
        document.getElementById("newPassword").style.border = "0.05em solid #07243293";
        bEsCorrecto = true;
    }

    return bEsCorrecto;
}

function confirmedPassword(){
    var sPassword = document.getElementById("newPassword").value;
    var spasswordConfirmedUser = document.getElementById("confirmPassword").value;
    var bEsCorrecto = false;

    if (Number(spasswordConfirmedUser.length) == 0){
        document.getElementById("confirmPassword").style.border = "0.05em solid #ff000093";
        document.getElementById("confirmPassword").focus();
    } else if (sPassword != spasswordConfirmedUser){
        document.getElementById("newPassword").style.border = "0.05em solid #ff000093";
        document.getElementById("confirmPassword").style.border = "0.05em solid #ff000093";
        document.getElementById("newPassword").focus();
        document.getElementById("confirmPassword").focus();
    } else {
        document.getElementById("confirmPassword").style.border = "0.05em solid #07243293";
        document.getElementById("newPassword").style.border = "0.05em solid #07243293";
        localStorage.setItem("newPassword", JSON.stringify(sPassword));
        bEsCorrecto = true;
    }

    return bEsCorrecto;
}