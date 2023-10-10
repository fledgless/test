// let spanDeux = document.getElementById("span-2")
let spanUn = document.querySelector("#span-1");
let spanDeux = document.querySelector("#span-2");
let hamburger = document.querySelector("#toggle-menu");
let menuList = document.querySelector("#nav-list");
let links = document.querySelectorAll("#nav-list > li > a");
// spanDeux.style.backgroundColor = "black";

spanUn.addEventListener("click", function () {
    spanDeux.classList.toggle("rotate");
}
)

hamburger.addEventListener("click", function () {
    menuList.classList.toggle("flex");
    hamburger.classList.toggle("close");
    if (hamburger.classLisr.contains("close")) {
        hamburger.textContent = "Close menu";
    } else {
        hamburger.textContent = "Open menu";
    }
});

menuLisr.addEventListener("click", function () {
    menuList.classList.toggle("flex");
    hamburger.classList.toggle("close");
    if (hamburger.classLisr.contains("close")) {
        hamburger.textContent = "Close menu";
    } else {
        hamburger.textContent = "Open menu";
    }
})