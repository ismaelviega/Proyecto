document.getElementById("href").addEventListener('click', redirectPage, false);

function redirectPage(){
    var iQuantityCart = document.getElementById("quantity").innerHTML;
    var sHref = document.getElementById("href").getAttribute("href");

    if (iQuantityCart == 0){
        document.getElementById("href").setAttribute("href", "../../nopucharse.html");
    } else {
        document.getElementById("href").setAttribute("href", "../../shoppingcart.html");
    }
}