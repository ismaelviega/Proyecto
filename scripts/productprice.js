var iProductPrice = 0;

for (i = 0; i <= localStorage.length - 1; i++)  {  
    key = localStorage.key(i);

    if (key.includes("jersey") || key.includes("short") || key.includes("windbreak")){
        iProductPrice += JSON.parse(localStorage.getItem(key)).Price.substring(0,5) * JSON.parse(localStorage.getItem(key)).Quantity;
    } 
}

document.getElementById("totalPrice").innerHTML = Number(iProductPrice) + "€"
document.getElementById("productPrice").innerHTML = Number(iProductPrice) + "€";





