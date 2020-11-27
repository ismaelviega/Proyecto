document.getElementById("subtractSecondKit").addEventListener('click', subtractQuantitySecondKit, false);
document.getElementById("addSecondKit").addEventListener('click', addQuantitySecondKit, false);

document.getElementById("nameSecondKit").addEventListener('keypress', checkLengthName, false);
document.getElementById("nameSecondKit").addEventListener('keyup', nameToUpperCase, false);
document.getElementById("numberSecondKit").addEventListener('keypress', checkLengthNumber, false);

function addQuantitySecondKit(event){
    event.preventDefault();
    var iQuantity = document.getElementById("quantitySecondKit").value;
    iQuantity = Number(iQuantity) + 1;
    document.getElementById("quantitySecondKit").value = iQuantity;
}

function subtractQuantitySecondKit(event){
    event.preventDefault();
    var iQuantity = document.getElementById("quantitySecondKit").value;

    if (iQuantity > 1){
        iQuantity = Number(iQuantity) - 1;
        document.getElementById("quantitySecondKit").value = iQuantity;
    }
}

function checkLengthNumber(){
    var iNumber = document.getElementById("numberSecondKit").value;

    if (iNumber.length > 1){
        document.getElementById("numberSecondKit").value = document.getElementById("numberSecondKit").value.substring(0,1); 
    }
}

function checkLengthName(){
    var sName = document.getElementById("nameSecondKit").value;

    if (sName.length > 10){
        document.getElementById("nameSecondKit").value = document.getElementById("nameSecondKit").value.substring(0,10);
    }
}

function nameToUpperCase(){
    document.getElementById("nameSecondKit").value = document.getElementById("nameSecondKit").value.toUpperCase();
}