var price = JSON.parse(localStorage.getItem("price"));

document.getElementById("productPrice").innerHTML = price.ProducPrice + "€";
document.getElementById("promotionDiscount").innerHTML = price.PromotionDiscount;
document.getElementById("totalPrice").innerHTML = price.TotalPrince + "€";

var oDate = new Date();
document.getElementById("day1").innerHTML = "Get it, '" + (oDate.getDate() + 7) + "/" + (oDate.getMonth() + 2) + "/" +  oDate.getFullYear() + "'.";
document.getElementById("day2").innerHTML = "Get it, '" + (oDate.getDate() + 3) + "/" + (oDate.getMonth() + 2) + "/" +  oDate.getFullYear() + "'.";
document.getElementById("day3").innerHTML = "Get it tomorrow, '" + (oDate.getDate() + 1) + "/" + (oDate.getMonth() + 1) + "/" +  oDate.getFullYear() + "'.";

document.getElementById("freeShipping").addEventListener('click', checkChecked, false);
document.getElementById("standarShipping").addEventListener('click', checkChecked, false);
document.getElementById("premiumShipping").addEventListener('click', checkChecked, false);

var iPrice = Number(document.getElementById("totalPrice").innerHTML.substring(0, document.getElementById("totalPrice").innerHTML.lastIndexOf("€")));

function checkChecked(){
    if (document.getElementById("standarShipping").checked == true){
        document.getElementById("totalPrice").innerHTML = Number(iPrice + 3.99).toFixed(2) + "€";
    } else if (document.getElementById("premiumShipping").checked == true){
        document.getElementById("totalPrice").innerHTML = Number(iPrice + 4.99).toFixed(2) + "€";
    } else {
        document.getElementById("totalPrice").innerHTML = iPrice + "€";
    }
}

document.getElementById("continue").addEventListener('click', continuePay, false);

function continuePay(event){
    if (document.getElementById("freeShipping").checked == true || 
        document.getElementById("standarShipping").checked == true ||       
        document.getElementById("premiumShipping").checked == true){ 
        document.getElementById("hrefContinue").setAttribute("href", "ordersent.html");
    } else {
        event.preventDefault();
    } 
}






