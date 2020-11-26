document.getElementById("subtractSecondKit").addEventListener('click', subtractQuantitySecondKit, false);
document.getElementById("addSecondKit").addEventListener('click', addQuantitySecondKit, false);

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