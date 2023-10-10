// let spanDeux = document.getElementById("span-2")
let spanUn = document.querySelector("#span-1");
let spanDeux = document.querySelector("#span-2");
let hamburger = document.querySelector("#hamburger");
// spanDeux.style.backgroundColor = "black";

spanUn.addEventListener("click", function(){
    spanDeux.classList.toggle("rotate");
}
)

hamburger.addEventListener("click", function(){
    menuList.classList.toggle("flex");
}
)