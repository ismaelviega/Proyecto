var iIndexFirstKit = 1;
/* var iIndexSecondKit = 1; */

showPicturesFirstKit(iIndexFirstKit);
/* showPicturesSecondKit(iIndexSecondKit); */

function nextPictureFirstKit(index) {
    showPicturesFirstKit(iIndexFirstKit += index);
}

/* function nextPictureSecondKit(index) {
    showPicturesSecondKit(iIndexSecondKit += index);
} */

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

function showPicturesSecondKit(index) {
    var iSecondKit = document.getElementsByClassName("secondKit");

    if (index > iSecondKit.length) { 
        iIndexSecondKit = 1 
    }

    if (index < 1) { 
        iIndexSecondKit = iSecondKit.length 
    }

    for (var i = 0; i < iSecondKit.length; i++) {
        iSecondKit[i].style.display = "none";
    }

    iSecondKit[iIndexSecondKit - 1].style.display = "block";
}