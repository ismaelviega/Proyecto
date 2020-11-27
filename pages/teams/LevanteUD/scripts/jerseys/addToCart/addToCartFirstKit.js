document.getElementById("addToCartFirstKit").addEventListener('click', addToCart, false);

function addToCart(event){
    event.preventDefault();

    var sImage = document.getElementById("addToCartFirstKit").getAttribute("src");
    var sPrice = document.getElementById("priceFirstKit").innerHTML;
    var sName = document.getElementById("nameFirstKit").value;
    var iNumber = document.getElementById("numberFirstKit").value;
    var iQuantity = document.getElementById("quantityFirstKit").value;
    var sSize = document.getElementById("sizeFirstKit").value.substring(5);

    var iCartQuantity = document.getElementById("quantity").innerHTML;
    iCartQuantity = Number(iCartQuantity) + Number(iQuantity);
    document.getElementById("quantity").innerHTML = iCartQuantity;

    var jerseyludfirst = {"Image" : sImage, "Price" : sPrice, "Quantity" : iQuantity,
                         "Name" : sName, "Number" : iNumber, "Size" : sSize};
    
    localStorage.setItem("jerseyLUDFirst", JSON.stringify(jerseyludfirst));
    localStorage.setItem("cartQuantity", JSON.stringify(iCartQuantity));
}