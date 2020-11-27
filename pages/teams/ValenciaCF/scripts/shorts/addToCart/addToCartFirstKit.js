document.getElementById("addToCartFirstKit").addEventListener('click', addToCart, false);

function addToCart(event){
    event.preventDefault();

    var sImage = document.getElementById("addToCartFirstKit").getAttribute("src");
    var sPrice = document.getElementById("priceFirstKit").innerHTML;
    var iNumber = document.getElementById("numberFirstKit").value;
    var iQuantity = document.getElementById("quantityFirstKit").value;
    var sSize = document.getElementById("sizeFirstKit").value.substring(5);

    var iCartQuantity = document.getElementById("quantity").innerHTML;
    iCartQuantity = Number(iCartQuantity) + Number(iQuantity);
    document.getElementById("quantity").innerHTML = iCartQuantity;

    var shortsvcffirst = {"Image" : sImage, "Price" : sPrice, "Quantity" : iQuantity,
                        "Name" : "", "Number" : "", "Size" : sSize};
    
    localStorage.setItem("shortsVCFFirst", JSON.stringify(shortsvcffirst));
    localStorage.setItem("cartQuantity", JSON.stringify(iCartQuantity));
}