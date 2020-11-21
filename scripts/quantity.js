function addQuantity(){
    var iQuantity = document.getElementById("quantity").value;
    iQuantity = Number(iQuantity) + 1;

    document.getElementById("quantity").value = iQuantity;
}

function subtractQuantity(){
    var iQuantity = document.getElementById("quantity").value;

    if (iQuantity > 1){
        iQuantity = Number(iQuantity) - 1;
        document.getElementById("quantity").value = iQuantity;
    }
}