document.getElementById("subtractFirstKit").addEventListener('click', subtractQuantityFirstKit, false);
document.getElementById("addFirstKit").addEventListener('click', addQuantityFirstKit, false);

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