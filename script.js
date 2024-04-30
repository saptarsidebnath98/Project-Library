const myLibrary = [];

function Book(title, author, pages, read) {
  // the constructor
  (this.title = title),
    (this.author = author),
    (this.pages = pages),
    (this.read = read);
}
function removeBook(index){
    myLibrary.splice(index, 1);
    render();
}
function render() {
  let library = document.querySelector("#library");
  library.innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];
    let bookElement = document.createElement("div");
    bookElement.innerHTML = 
    `<div class="car-header">
        <h3 class="title">${book.title}</h3>
        <h5 class="author"> by ${book.author}</h5>
    </div>
    <div class="car-body">
        <p class="pages">Pages: ${book.pages}</p>
        <p class="read-status">${book.read ? "Read" : "Not yet read"}</p>
        <button class="remove-btn" onclick="removeBook(${i})">Remove</button>
    </div>
    `;
    library.appendChild(bookElement);
  }
}

function addBookToLibrary() {
  // do stuff here
  let title = document.querySelector("#title").value;
  let author = document.querySelector("#author").value;
  let pages = document.querySelector("#no_of_pages").value;
  let read = document.querySelector("#read").value;

  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  render();
}

const newBookBtn = document.querySelector("#new-book-btn");
newBookBtn.addEventListener("click", () => {
  const bookForm = document.querySelector("#new-book-form");
  bookForm.style.display = "flex";
});

document.querySelector("#submit").addEventListener("click", (event) => {
  event.preventDefault();
  addBookToLibrary();
});
