var iIndexSecondKit = 1;
showPicturesSecondKit(iIndexSecondKit);

function nextPictureSecondKit(index) {
    showPicturesSecondKit(iIndexSecondKit += index);
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