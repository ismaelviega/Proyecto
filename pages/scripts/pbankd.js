var price = JSON.parse(localStorage.getItem("price"));

document.getElementById("productPrice").innerHTML = price.ProducPrice + "€";
document.getElementById("promotionDiscount").innerHTML = price.PromotionDiscount;
document.getElementById("totalPrice").innerHTML = price.TotalPrince + "€";


document.getElementById("continue").addEventListener('click', continuePay, false);

function continuePay(event){
    validateCVV();
    validateMonth();
    validateCardNumber();

    if (validateCardNumber() == true && validateMonth() == true && validateCVV() == true){
        localStorage.setItem("card", document.getElementById("card").value);
        localStorage.setItem("month", document.getElementById("month").value);
        localStorage.setItem("cvv", document.getElementById("cvv").value);
        
        document.getElementById("hrefContinue").setAttribute("href", "shippingtype.html");
    } else {
        event.preventDefault();
    } 

}

function validateCardNumber(){
    var sCard = document.getElementById("card").value;
    rExpresion = /^\d{16}$/;
    var bEsCorrecto = false;

    if (Number(sCard.length) == 0){
        document.getElementById("card").style.borderBottomColor = "red";
        document.getElementById("card").focus();
    } else if (rExpresion.test(sCard) == false){
        document.getElementById("card").style.borderBottomColor = "red";
        document.getElementById("card").focus();
    } else {
        document.getElementById("card").style.borderBottomColor = "#072432";
        bEsCorrecto = true;
    }

    return bEsCorrecto;
}

function validateMonth(){
    var dMonth = document.getElementById("month").value;
    var bEsCorrecto = false;

    if (Number(dMonth.length) == 0){
        document.getElementById("month").style.borderBottomColor = "red";
        document.getElementById("month").focus();
    } else {
        document.getElementById("month").style.borderBottomColor = "#072432";
        bEsCorrecto = true;
    }

    return bEsCorrecto;
}

function validateCVV(){
    var iCVV = document.getElementById("cvv").value;
    var rExpresion = /^\d{3}$/;
    var bEsCorrecto = false;

    if (Number(iCVV.length) == 0){
        document.getElementById("cvv").style.borderBottomColor = "red";
        document.getElementById("cvv").focus();
    } else if (rExpresion.test(iCVV) == false){
        document.getElementById("cvv").style.borderBottomColor = "red";
        document.getElementById("cvv").focus();
    } else {
        document.getElementById("cvv").style.borderBottomColor = "#072432";
        bEsCorrecto = true;
    }

    return bEsCorrecto;
}
