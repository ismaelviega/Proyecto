document.getElementById("payProduct").addEventListener('click', check, false);

function check(event){
    var iProductPrice = document.getElementById("productPrice").innerHTML.substring(0, document.getElementById("productPrice").innerHTML.lastIndexOf("€"));
    var iPromotionDiscount = document.getElementById("promotionDiscount").innerHTML.substring(0, document.getElementById("productPrice").innerHTML.lastIndexOf("€"));
    var iTotalPrice = document.getElementById("totalPrice").innerHTML.substring(0, document.getElementById("productPrice").innerHTML.lastIndexOf("€"));

    var price = { "ProducPrice" : iProductPrice, "PromotionDiscount" : iPromotionDiscount, "TotalPrince" : iTotalPrice};
    localStorage.setItem("price", JSON.stringify(price));

    if (document.getElementById("nameUser").innerHTML.length == 0){
        document.getElementById("hrefPay").setAttribute("href", "login.html");
    } else {
        document.getElementById("hrefPay").setAttribute("href", "pinformation.html");
    }
}