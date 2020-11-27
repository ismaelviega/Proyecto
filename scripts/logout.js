document.getElementById("logout").addEventListener('click', logOut, false);

function logOut(){
    for (var i = 0; i < localStorage.length; i++){
        localStorage.removeItem(localStorage.key(i));
    }

    var iUser = sessionStorage.length - 1;

    if (iUser == 1){
        var sUserConfirmed = "user";
    } else {
        var sUserConfirmed = "user".concat(iUser);
    }

    sessionStorage.removeItem(sessionStorage.key(iUser));
    document.getElementById("href").setAttribute("href", "../../index.html");
}


