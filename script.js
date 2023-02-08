const books = document.querySelectorAll('.col-4');
for (const book of books) {
  const image = book.querySelector('img');
  image.addEventListener('click', function() {
    const title = book.querySelector('h4').textContent;
    const description = 'Description for book: ' + title;

    alert(description);
  });
}
