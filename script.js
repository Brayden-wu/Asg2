const animalCrossing = document.getElementById("animal-crossing");
const modal = document.getElementById("modal");
const close = document.querySelector(".close");
const modalImg = document.getElementById("modal-img");
const modalTitle = document.getElementById("modal-title");

animalCrossing.addEventListener("click", function() {
  modal.style.display = "block";
  modalImg.src = this.src;
  modalTitle.innerHTML = this.nextElementSibling.innerHTML;
});

close.addEventListener("click", function() {
  modal.style.display = "none";
});

window.addEventListener("click", function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});



// RIDZAL BELOW

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click",() => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n =>n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

document.getElementById("loginbutton").addEventListener("click",function(){
    document.querySelector(".loginpopup").style.display = "flex";
})

document.querySelector(".closepopup").addEventListener("click",function(){
    document.querySelector(".loginpopup").style.display = "none";
})
