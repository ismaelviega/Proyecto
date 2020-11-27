document.getElementById("addToCartFirstKit").addEventListener('click', addToCart, false);

function addToCart(event){
    event.preventDefault();

    var sImage = document.getElementById("addToCartFirstKit").getAttribute("src");
    var sPrice = document.getElementById("priceFirstKit").innerHTML;
    var iQuantity = document.getElementById("quantityFirstKit").value;
    var sSize = document.getElementById("sizeFirstKit").value.substring(5);

    var iCartQuantity = document.getElementById("quantity").innerHTML;
    iCartQuantity = Number(iCartQuantity) + Number(iQuantity);
    document.getElementById("quantity").innerHTML = iCartQuantity;

    var windbreakerecffirst = {"Image" : sImage, "Price" : sPrice, "Quantity" : iQuantity,
                            "Name" : "", "Number" : "", "Size" : sSize};
    
    localStorage.setItem("windbreakerECFFirst", JSON.stringify(windbreakerecffirst));
    localStorage.setItem("cartQuantity", JSON.stringify(iCartQuantity));
}