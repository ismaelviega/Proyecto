document.getElementById("addToCartSecondKit").addEventListener('click', addToCart, false);

function addToCart(event){
    event.preventDefault();

    var sImage = document.getElementById("addToCartSecondKit").getAttribute("src");
    var sPrice = document.getElementById("priceSecondKit").innerHTML;
    var iQuantity = document.getElementById("quantitySecondKit").value;
    var sSize = document.getElementById("sizeSecondKit").value.substring(5);

    var iCartQuantity = document.getElementById("quantity").innerHTML;
    iCartQuantity = Number(iCartQuantity) + Number(iQuantity);
    document.getElementById("quantity").innerHTML = iCartQuantity;

    var windbreakerfcbsecond = {"Image" : sImage, "Price" : sPrice, "Quantity" : iQuantity,
                            "Name" : "", "Number" : "", "Size" : sSize};
    
    localStorage.setItem("windbreakerFCBSecond", JSON.stringify(windbreakerfcbsecond));
    localStorage.setItem("cartQuantity", JSON.stringify(iCartQuantity));
}