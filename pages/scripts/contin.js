document.getElementById("quantity").innerHTML = 0;
document.getElementById("continue").addEventListener('click', finalizePurchase, false);

function finalizePurchase(){
    localStorage.clear();
    document.getElementById("hrefContinue").setAttribute("href", "../index.html");
}