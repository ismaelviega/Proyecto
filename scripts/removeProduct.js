document.getElementById("recycle").addEventListener('click', removeProduct, false);

function removeProduct(){
    for (i = 0; i <= localStorage.length; i++)  {  
        localStorage.removeItem(localStorage.key(i));
    }
    
    document.getElementById("href").setAttribute("href", "nopucharse.html");
}