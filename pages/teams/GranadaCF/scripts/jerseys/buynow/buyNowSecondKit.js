document.getElementById("buyNowSecondKit").addEventListener('click', buyNow, false);

function buyNow(event){
    var sImage = document.getElementById("buyNowSecondKit").getAttribute("src");
    var sPrice = document.getElementById("priceSecondKit").innerHTML;
    var sName = document.getElementById("nameSecondKit").value;
    var iNumber = document.getElementById("numberSecondKit").value;
    var iQuantity = document.getElementById("quantitySecondKit").value;
    var sSize = document.getElementById("sizeSecondKit").value.substring(5);
    
    var iCartQuantity = document.getElementById("quantity").innerHTML;
    iCartQuantity = Number(iCartQuantity) + Number(iQuantity);
    document.getElementById("quantity").innerHTML = iCartQuantity;

    var jerseygrcfsecond = {"Image" : sImage, "Price" : sPrice, "Quantity" : iQuantity,
                         "Name" : sName, "Number" : iNumber, "Size" : sSize};
    
    localStorage.setItem("jerseyGrCFSecond", JSON.stringify(jerseygrcfsecond));
    localStorage.setItem("cartQuantity", JSON.stringify(iCartQuantity));
}