document.getElementById("subtractFirstKit").addEventListener('click', subtractQuantityFirstKit, false);
document.getElementById("addFirstKit").addEventListener('click', addQuantityFirstKit, false);

document.getElementById("numberFirstKit").addEventListener('keypress', checkLengthNumber, false);

function addQuantityFirstKit(event){
    event.preventDefault();
    var iQuantity = document.getElementById("quantityFirstKit").value;
    iQuantity = Number(iQuantity) + 1;
    document.getElementById("quantityFirstKit").value = iQuantity;
}

function subtractQuantityFirstKit(event){
    event.preventDefault();
    var iQuantity = document.getElementById("quantityFirstKit").value;

    if (iQuantity > 1){
        iQuantity = Number(iQuantity) - 1;
        document.getElementById("quantityFirstKit").value = iQuantity;
    }
}

function checkLengthNumber(){
    var iNumber = document.getElementById("numberFirstKit").value;

    if (iNumber.length > 1){
        document.getElementById("numberFirstKit").value = document.getElementById("numberFirstKit").value.substring(0,1); 
    }
}

function nameToUpperCase(){
    document.getElementById("nameFirstKit").value = document.getElementById("nameFirstKit").value.toUpperCase();
}