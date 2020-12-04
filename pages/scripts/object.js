function Article (sProduct, iPrice, sSize, sBadge, sName, iNumber, iQuantity){
    //Propiedades:
        this.sProduct = sProduct;
        this.iPrice = iPrice;
        this.sSize = sSize;
        this.sBadge = sBadge;
        this.sName = sName;
        this.iNumber = iNumber;
        this.iQuantity = iQuantity;

    //Métodos:
        //Setters
            this.setSProduct = function (sProduct) {
                this.sProduct = sProduct;
            };

            this.setIPrice = function (iPrice) {
                this.iPrice = iPrice;
            };

            this.setSSize = function (sSize) {
                this.sSize = sSize;
            };

            this.setSBadge= function (sBadge) {
                this.sBadge = sBadge;
            };

            this.setSName = function (sName) {
                this.sName = sName;
            };

            this.setINumber= function (iNumber) {
                this.iNumber = iNumber;
            };

            this.setIQuantity = function (iQuantity) {
                this.iQuantity = iQuantity;
            };

        //Getters
            this.getSProduct= function () {
                return this.sProduct;
            };

            this.getIPrice= function () {
                return this.iPrice;
            };

            this.getSSize= function () {
                return this.sSize;
            };

            this.getSName= function () {
                return this.sName;
            };

            this.getINumber= function () {
                return this.iNumber;
            };

            this.getIQuantity= function () {
                return this.iQuantity;
            };
}

function addArticle(){
    var oArticle = new Article(localStorage.getItem("sProduct"),
                               localStorage.getItem("iPrice"),
                               localStorage.getItem("sSize"),
                               localStorage.getItem("sBadge"),
                               localStorage.getItem("sName"),
                               localStorage.getItem("iNumber"),
                               localStorage.getItem("iQuantity")
    
    );
}