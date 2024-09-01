let id = setTimeout(function() {
    alert("This is only for education purpose");
}, 0);
/*let id1 = setInterval(() => {
    alert("This is only for education purpose");
}, 10000);*/
/* ----------------------nav bar-------------------*/
let hamburger = document.getElementById("hamburger");
let cross = document.getElementById("cross");
let navShowEle = document.getElementById("navShowList");
let navContainerEle = document.getElementById("navContainer");
hamburger.addEventListener("click", function() {
    navContainerEle.classList.add("d-none");
    navShowEle.classList.remove("d-none");
});
cross.addEventListener("click", function() {
    navContainerEle.classList.remove("d-none");
    navShowEle.classList.add("d-none");
});
/* -------------------customer captain switch------------------------ */

let changesCustEle = document.getElementById("cust1");
let changesCaptEle = document.getElementById("capt1");
let customerContent = document.getElementById("customer-content");
let captainContent = document.getElementById("captain-content");
changesCaptEle.addEventListener("click", function() {
    changesCaptEle.classList.remove("js-customer-color");
    changesCaptEle.classList.remove("js-captain-color");
    changesCaptEle.classList.remove("js-border-cap-cust");
    changesCaptEle.classList.add("js-captain-color");
    changesCustEle.classList.add("js-customer-color");
    changesCustEle.classList.add("js-border-cap-cust");
    captainContent.classList.remove("d-none");
    customerContent.classList.add("d-none");
});
changesCustEle.addEventListener("click", function() {
    changesCustEle.classList.remove("js-border-cap-cust");
    changesCaptEle.classList.remove("js-captain-color");
    changesCustEle.classList.remove("js-customer-color");
    changesCaptEle.classList.add("js-customer-color");
    changesCustEle.classList.add("js-captain-color");
    changesCaptEle.classList.add("js-border-cap-cust");
    customerContent.classList.remove("d-none");
    captainContent.classList.add("d-none");
});

/*-------------------------Carousel switch-------------------------- */
let cCustId = document.getElementById("cauroselCustId");
let cCaptId = document.getElementById("cauroselCaptId");

cCaptId.addEventListener("click", function() {
    cCaptId.classList.remove("js-customer-color");
    cCaptId.classList.add("js-captain-color");
    cCaptId.classList.remove("js-border-cap-cust");
    cCustId.classList.remove("js-captain-color");
    cCustId.classList.add("js-customer-color");
    cCustId.classList.add("js-border-cap-cust");

});
cCustId.addEventListener("click", function() {
    cCustId.classList.remove("js-border-cap-cust");
    cCaptId.classList.remove("js-captain-color");
    cCustId.classList.remove("js-customer-color");
    cCaptId.classList.add("js-customer-color");
    cCustId.classList.add("js-captain-color");
    cCaptId.classList.add("js-border-cap-cust");
});