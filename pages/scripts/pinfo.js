var price = JSON.parse(localStorage.getItem("price"));

document.getElementById("productPrice").innerHTML = price.ProducPrice + "€";
document.getElementById("promotionDiscount").innerHTML = price.PromotionDiscount;
document.getElementById("totalPrice").innerHTML = price.TotalPrince + "€";

document.getElementById("name").addEventListener('keyup', toUpperCase, false);
document.getElementById("phone").addEventListener('keyup', toUpperCase, false);
document.getElementById("nif").addEventListener('keyup', toUpperCase, false);

document.getElementById("continue").addEventListener('click', continuePay, false);

function continuePay(event){
    validateDNI();
    validatePhone();
    validateName();

    if (validateName() == true && validatePhone() == true && validateDNI() == true){
        localStorage.setItem("name", document.getElementById("name").value);
        localStorage.setItem("phone", document.getElementById("phone").value);
        localStorage.setItem("nif", document.getElementById("nif").value);

        document.getElementById("hrefContinue").setAttribute("href", "plocation.html");
    } else {
        event.preventDefault();
    } 

}

function validateName(){
    var sName = document.getElementById("name").value;
    var bEsCorrecto = false;

    if (Number(sName.length) == 0){
        document.getElementById("name").style.borderBottomColor = "red";
        document.getElementById("name").focus();
    } else {
        document.getElementById("name").style.borderBottomColor = "#072432";
        bEsCorrecto = true;
    }

    return bEsCorrecto;
}

function validatePhone(){
    var iPhone = document.getElementById("phone").value;
    rExpresion = /^\d{9}$/;
    var bEsCorrecto = false;

    if (Number(iPhone.length) == 0){
        document.getElementById("phone").style.borderBottomColor = "red";
        document.getElementById("phone").focus();
    } else if (rExpresion.test(iPhone) == false){
        document.getElementById("phone").style.borderBottomColor = "red";
        document.getElementById("phone").focus();
    } else {
        document.getElementById("phone").style.borderBottomColor = "#072432";
        bEsCorrecto = true;
    }

    return bEsCorrecto;
}

function validateDNI(){
    var sNIF = document.getElementById("nif").value;
    var rExpresion = /^\d{8}[a-zA-Z]{1}$/;
    var bEsCorrecto = false;

    if (Number(sNIF.length) == 0){
        document.getElementById("nif").style.borderBottomColor = "red";
        document.getElementById("nif").focus();
    } else if (rExpresion.test(sNIF) == false){
        document.getElementById("nif").style.borderBottomColor = "red";
        document.getElementById("nif").focus();
    } else {
        document.getElementById("nif").style.borderBottomColor = "#072432";
        bEsCorrecto = true;
    }

    return bEsCorrecto;
}

function toUpperCase(){
    document.getElementById("name").value = document.getElementById("name").value.toUpperCase();
    document.getElementById("phone").value = document.getElementById("phone").value.toUpperCase();
    document.getElementById("nif").value = document.getElementById("nif").value.toUpperCase();
}