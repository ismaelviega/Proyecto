var iUser = sessionStorage.length - 1;

if (iUser == 1){
    var sUserConfirmed = "user";
} else {
    var sUserConfirmed = "user".concat(iUser);
}

if (sessionStorage.length > 1){
    var sUser = JSON.parse(sessionStorage.getItem(sUserConfirmed)).User;
    document.getElementById("nameUser").innerHTML = sUser.toUpperCase();

    if (sUser.length > 0){
        document.getElementById("hrefUser").setAttribute("href", "pages/session.html");
        document.getElementById("nameUser").setAttribute("href", "pages/session.html");
    }
}




