document.getElementById("buyNowSecondKit").addEventListener('click', buyNow, false);

function buyNow(event){
    var sImage = document.getElementById("buyNowSecondKit").getAttribute("src");
    var sPrice = document.getElementById("priceSecondKit").innerHTML;
    var iQuantity = document.getElementById("quantitySecondKit").value;
    var sSize = document.getElementById("sizeSecondKit").value.substring(5);
    
    var iCartQuantity = document.getElementById("quantity").innerHTML;
    iCartQuantity = Number(iCartQuantity) + Number(iQuantity);
    document.getElementById("quantity").innerHTML = iCartQuantity;

    var windbreakerrssecond = {"Image" : sImage, "Price" : sPrice, "Quantity" : iQuantity,
                            "Name" : "", "Number" : "", "Size" : sSize};
    
    localStorage.setItem("windbreakerRSSecond", JSON.stringify(windbreakerrssecond));
    localStorage.setItem("cartQuantity", JSON.stringify(iCartQuantity));
}