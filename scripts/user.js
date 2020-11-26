var iUser = sessionStorage.length - 1;

if (iUser == 1){
    var sUserConfirmed = "user";
} else {
    var sUserConfirmed = "user".concat(iUser);
}

var sUser = JSON.parse(sessionStorage.getItem(sUserConfirmed)).User;
document.getElementById("nameUser").innerHTML = sUser;