document.getElementById("quantity").innerHTML = JSON.parse(localStorage.getItem("cartQuantity"));

for (i = 0; i <= localStorage.length - 1; i++)  {  
    key = localStorage.key(i);

    if (key.includes("jersey") || key.includes("short") || key.includes("windbreak")){
        var product = "";

        product += "<tr><td><img src='" + JSON.parse(localStorage.getItem(key)).Image + "' id='product'></td>";
        product += "<td><h1>" + JSON.parse(localStorage.getItem(key)).Price + "</h1></td>";
        product += "<td><input type='number' id='quantity' value='" + JSON.parse(localStorage.getItem(key)).Quantity + "' required autocomplete='off' readonly></td>";
        product += "<td><h1>" + JSON.parse(localStorage.getItem(key)).Name + "</h1></td>";
        product += "<td><h1>" + JSON.parse(localStorage.getItem(key)).Number + "</h1></td>";
        product += "<td><h1>" + JSON.parse(localStorage.getItem(key)).Size + "</h1></td></tr></table>";


        document.getElementById("product").innerHTML += product;
    }
      
}


