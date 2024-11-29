let menuBtn = document.querySelector("#menu");
let crossBtn = document.querySelector("#cross");
let barBox = document.querySelector(".bar-box");
menuBtn.addEventListener("click" , () => {
    barBox.classList.toggle("bar-box");
    barBox.style.backgroundColor = "white"; 
})
crossBtn.addEventListener("click" , () => {
    barBox.classList.toggle("bar-box");
})