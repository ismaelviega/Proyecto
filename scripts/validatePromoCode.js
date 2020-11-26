document.getElementById("submit").addEventListener('click', validatePromoCode, false);

function validatePromoCode(event){
    var aPromotionalCode = ["CROOM2020", "BKFRIDAY20"];
    var sPromotionalCode = document.getElementById("promotionalCode").value;
    var iProductPrice = document.getElementById("productPrice").innerHTML.substring(0,5);
    var iTotalPrice = document.getElementById("totalPrice").innerHTML.substring(0,5);
    var iDiscount = 0;
    var bCorrectCode = false;
    event.preventDefault();

    if (sPromotionalCode.length != 0){
        for (i = 0; i < aPromotionalCode.length; i++){
            if (sPromotionalCode.toUpperCase() == aPromotionalCode[i]){
                bCorrectCode = true;
            }
        }
    } 

    iTotalPrice = iProductPrice;
    
    if (bCorrectCode == true){
        if (sPromotionalCode.toUpperCase() == "CROOM2020"){
            document.getElementById("message").innerHTML = "Congratulations, you have a 15% discount!";
            iDiscount = (iTotalPrice * 15) / 100;
            document.getElementById("promotionDiscount").innerHTML = Number(iDiscount).toFixed(2) + "€";
            document.getElementById("productPrice").innerHTML = iProductPrice + "€";
            document.getElementById("totalPrice").innerHTML = (Number(iTotalPrice) - Number(iDiscount)).toFixed(2) + "€";
        } else if (sPromotionalCode.toUpperCase() == "BKFRIDAY20"){
            document.getElementById("message").innerHTML = "Congratulations, you have a 10% discount!";
            iDiscount = (iTotalPrice * 10) / 100;
            document.getElementById("promotionDiscount").innerHTML = Number(iDiscount).toFixed(2) + "€";
            document.getElementById("productPrice").innerHTML = iProductPrice + "€";
            document.getElementById("totalPrice").innerHTML = (Number(iTotalPrice) - Number(iDiscount)).toFixed(2) + "€";
        } else {
            document.getElementById("message").innerHTML = "The promo code is not valid.";
        }
    } else {
        document.getElementById("promotionDiscount").innerHTML = "0€";
        document.getElementById("message").innerHTML = "No promotional code has been entered.";
    }
}