var iQuantity = localStorage.getItem("cartQuantity");

if (iQuantity == null){
    document.getElementById("quantity").innerHTML = "0";
} else {
    document.getElementById("quantity").innerHTML = iQuantity;
}

document.getElementById("href").addEventListener('click', redirectPage, false);

function redirectPage(){
    var iQuantityCart = localStorage.getItem("cartQuantity");
    
    if (iQuantityCart == null){
        document.getElementById("href").setAttribute("href", "nopucharse.html");
    } else {
        document.getElementById("href").setAttribute("href", "shoppingcart.html");
    }
}