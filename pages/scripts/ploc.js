var price = JSON.parse(localStorage.getItem("price"));

document.getElementById("productPrice").innerHTML = price.ProducPrice + "€";
document.getElementById("promotionDiscount").innerHTML = price.PromotionDiscount;
document.getElementById("totalPrice").innerHTML = price.TotalPrince + "€";

document.getElementById("city").addEventListener('keyup', toUpperCase, false);
document.getElementById("province").addEventListener('keyup', toUpperCase, false);
document.getElementById("address1").addEventListener('keyup', toUpperCase, false);
document.getElementById("address2").addEventListener('keyup', toUpperCase, false);
document.getElementById("postalcode").addEventListener('keyup', toUpperCase, false);

document.getElementById("continue").addEventListener('click', continuePay, false);

function continuePay(event){
    validatePostalCode();
    validateAddress2();
    validateAddress1();
    validateProvince();
    validateCity();

    if (validateCity() == true && validateProvince() == true && validateAddress1() == true &&
        validateAddress2() == true && validatePostalCode() == true){
        localStorage.setItem("country", document.getElementById("country").options[document.getElementById("country").selectedIndex].text);
        localStorage.setItem("city", document.getElementById("city").value);
        localStorage.setItem("province", document.getElementById("province").value);
        localStorage.setItem("address1", document.getElementById("address1").value);
        localStorage.setItem("address2", document.getElementById("address2").value);
        localStorage.setItem("postalcode", document.getElementById("postalcode").value);

        document.getElementById("hrefContinue").setAttribute("href", "bankdata.html");
    } else {
        event.preventDefault();
    } 

}

function validateCity(){
    var sCity = document.getElementById("city").value;
    var bEsCorrecto = false;

    if (Number(sCity.length) == 0){
        document.getElementById("city").style.borderBottomColor = "red";
        document.getElementById("city").focus();
    } else {
        document.getElementById("city").style.borderBottomColor = "#072432";
        bEsCorrecto = true;
    }

    return bEsCorrecto;
}

function validateProvince(){
    var sProvince = document.getElementById("province").value;
    var bEsCorrecto = false;

    if (Number(sProvince.length) == 0){
        document.getElementById("province").style.borderBottomColor = "red";
        document.getElementById("province").focus();
    } else {
        document.getElementById("province").style.borderBottomColor = "#072432";
        bEsCorrecto = true;
    }

    return bEsCorrecto;
}

function validateAddress1(){
    var sAddress1 = document.getElementById("address1").value;
    var bEsCorrecto = false;

    if (Number(sAddress1.length) == 0){
        document.getElementById("address1").style.borderBottomColor = "red";
        document.getElementById("address1").focus();
    } else {
        document.getElementById("address1").style.borderBottomColor = "#072432";
        bEsCorrecto = true;
    }

    return bEsCorrecto;
}

function validateAddress2(){
    var sAddress2 = document.getElementById("address2").value;
    var bEsCorrecto = false;

    if (Number(sAddress2.length) == 0){
        document.getElementById("address2").style.borderBottomColor = "red";
        document.getElementById("address2").focus();
    } else {
        document.getElementById("address2").style.borderBottomColor = "#072432";
        bEsCorrecto = true;
    }

    return bEsCorrecto;
}

function validatePostalCode(){
    var iPostalCode = document.getElementById("postalcode").value;
    rExpresion = /^\d{5}$/;
    var bEsCorrecto = false;

    if (Number(iPostalCode.length) == 0){
        document.getElementById("postalcode").style.borderBottomColor = "red";
        document.getElementById("postalcode").focus();
    } else if (rExpresion.test(iPostalCode) == false){
        document.getElementById("postalcode").style.borderBottomColor = "red";
        document.getElementById("postalcode").focus();
    } else {
        document.getElementById("postalcode").style.borderBottomColor = "#072432";
        bEsCorrecto = true;
    }

    return bEsCorrecto;
}

function toUpperCase(){
    document.getElementById("city").value = document.getElementById("city").value.toUpperCase();
    document.getElementById("province").value = document.getElementById("province").value.toUpperCase();
    document.getElementById("address1").value = document.getElementById("address1").value.toUpperCase();
    document.getElementById("address2").value = document.getElementById("address2").value.toUpperCase();
    document.getElementById("postalcode").value = document.getElementById("postalcode").value.toUpperCase();
}