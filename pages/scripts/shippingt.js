var price = JSON.parse(localStorage.getItem("price"));

document.getElementById("productPrice").innerHTML = price.ProducPrice + "€";
document.getElementById("promotionDiscount").innerHTML = price.PromotionDiscount;
document.getElementById("totalPrice").innerHTML = price.TotalPrince + "€";

var oDate = new Date();
document.getElementById("day1").innerHTML = "Get it, '" + (oDate.getDate() + 7) + "/" + (oDate.getMonth() + 2) + "/" +  oDate.getFullYear() + "'.";
document.getElementById("day2").innerHTML = "Get it, '" + (oDate.getDate() + 3) + "/" + (oDate.getMonth() + 2) + "/" +  oDate.getFullYear() + "'.";
document.getElementById("day3").innerHTML = "Get it tomorrow, '" + (oDate.getDate() + 1) + "/" + (oDate.getMonth() + 1) + "/" +  oDate.getFullYear() + "'.";


document.getElementById("continue").addEventListener('click', continuePay, false);

function continuePay(event){
    if (document.getElementById("shipping").checked == true){        
        document.getElementById("hrefContinue").setAttribute("href", "ordersent.html");
    } else {
        event.preventDefault();
    } 

}




