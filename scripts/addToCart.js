function addToCart(event){
    var iQuantityShopping = document.getElementById("quantityShopping").innerHTML;
    var iQuantity = document.getElementById("quantity").value;
    
    iQuantityShopping = Number(iQuantityShopping) + Number(iQuantity);

    document.getElementById("quantityShopping").innerHTML = iQuantityShopping;
    event.preventDefault();
}