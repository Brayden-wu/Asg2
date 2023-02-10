function showBookDetails(title, imageUrl, price) {
  const bookDetails = `
  <div class="book-details">
      <img src="${imageUrl}" alt="${title}" width="200px" height="200px">
      <h4>${title}</h4>
      <p1>Price: $${price}</p1>
      <button id="add-to-cart-button">Add to Cart</button>
  </div>
  `;

  const overlay = document.createElement("div");
  overlay.innerHTML = bookDetails;
  overlay.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
  overlay.style.position = "fixed";
  overlay.style.top = "0";
  overlay.style.bottom = "0";
  overlay.style.left = "0";
  overlay.style.right = "0";
  overlay.style.display = "flex";
  overlay.style.alignItems = "center";
  overlay.style.justifyContent = "center";
  document.body.appendChild(overlay);

  overlay.addEventListener("click", function(event) {
      if (event.target.id === "add-to-cart-button") {
          addToCart(title, price);
      } else {
          document.body.removeChild(overlay);
      }
  });
}

const books = document.getElementsByClassName("col-4");
for (const book of books) {
  const img = book.getElementsByTagName("img")[0];
  const title = book.getElementsByTagName("h4")[0].innerHTML;
  const price = book.getElementsByTagName("p1")[0].innerHTML.split(" ")[1];
  img.addEventListener("click", function() {
      showBookDetails(title, img.src, price);
  });
}

