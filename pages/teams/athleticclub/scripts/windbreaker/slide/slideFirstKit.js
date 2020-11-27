var iIndexFirstKit = 1;
showPicturesFirstKit(iIndexFirstKit);

function nextPictureFirstKit(index) {
    showPicturesFirstKit(iIndexFirstKit += index);
}

function showPicturesFirstKit(index) {
    var iFirstKit = document.getElementsByClassName("firstKit");

    if (index > iFirstKit.length) { 
        iIndexFirstKit = 1 
    }

    if (index < 1) { 
        iIndexFirstKit = iFirstKit.length 
    }

    for (var i = 0; i < iFirstKit.length; i++) {
        iFirstKit[i].style.display = "none";
    }

    iFirstKit[iIndexFirstKit - 1].style.display = "block";
}