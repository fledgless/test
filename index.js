// let spanDeux = document.getElementById("span-2")
let spanUn = document.querySelector("#span-1");
let spanDeux = document.querySelector("#span-2");
// spanDeux.style.backgroundColor = "black";

spanUn.addEventListener("click", function(){
    spanDeux.classList.toggle("rotate");
}
)