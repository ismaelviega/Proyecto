document.getElementById("buyNowFirstKit").addEventListener('click', buyNow, false);

function buyNow(event){
    var sImage = document.getElementById("buyNowFirstKit").getAttribute("src");
    var sPrice = document.getElementById("priceFirstKit").innerHTML;
    var iNumber = document.getElementById("numberFirstKit").value;
    var iQuantity = document.getElementById("quantityFirstKit").value;
    var sSize = document.getElementById("sizeFirstKit").value.substring(5);
    
    var iCartQuantity = document.getElementById("quantity").innerHTML;
    iCartQuantity = Number(iCartQuantity) + Number(iQuantity);
    document.getElementById("quantity").innerHTML = iCartQuantity;

    var shortsecffirst = {"Image" : sImage, "Price" : sPrice, "Quantity" : iQuantity,
                        "Name" : "", "Number" : "", "Size" : sSize};
    
    localStorage.setItem("shortsECFFirst", JSON.stringify(shortsecffirst));
    localStorage.setItem("cartQuantity", JSON.stringify(iCartQuantity));
}