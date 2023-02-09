const books = document.querySelectorAll('.col-4');
for (const book of books) {
  const image = book.querySelector('img');
  image.addEventListener('click', function() {
    const title = book.querySelector('h4').textContent;
    const description = 'Description for book: ' + title;

    alert(description);
  });
}


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