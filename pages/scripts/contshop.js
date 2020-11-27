document.getElementById("continue").addEventListener('click', continuePay, false);

function continuePay(){
    document.getElementById("hrefContinue").setAttribute("href", "../index.html");
}