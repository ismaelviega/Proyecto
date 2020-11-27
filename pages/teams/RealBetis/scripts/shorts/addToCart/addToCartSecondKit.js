document.getElementById("addToCartSecondKit").addEventListener('click', addToCart, false);

function addToCart(event){
    event.preventDefault();

    var sImage = document.getElementById("addToCartSecondKit").getAttribute("src");
    var sPrice = document.getElementById("priceSecondKit").innerHTML;
    var iNumber = document.getElementById("numberSecondKit").value;
    var iQuantity = document.getElementById("quantitySecondKit").value;
    var sSize = document.getElementById("sizeSecondKit").value.substring(5);

    var iCartQuantity = document.getElementById("quantity").innerHTML;
    iCartQuantity = Number(iCartQuantity) + Number(iQuantity);
    document.getElementById("quantity").innerHTML = iCartQuantity;

    var shortsrbbsecond = {"Image" : sImage, "Price" : sPrice, "Quantity" : iQuantity,
                        "Name" : "", "Number" : "", "Size" : sSize};
    
    localStorage.setItem("shortsRBBSecond", JSON.stringify(shortsrbbsecond));
    localStorage.setItem("cartQuantity", JSON.stringify(iCartQuantity));
}