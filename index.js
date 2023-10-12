const myLibrary = [];

function Book(title, author, pages, hasRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.hasRead = hasRead;
  this.info = function () {
    return `${this.title}, ${this.author}, ${this.pages}, ${this.hasRead}`;
  };
}

const addBookBtn = document.getElementById("add-book-btn");

addBookBtn.addEventListener("click", () => {
  const sideBar = document.getElementById("side-bar");
  sideBar.hidden = !sideBar.hidden;
});

const submitBookBtn = document.getElementById("submit-book");
const bookTitle = document.getElementById("title");
const bookAuthor = document.getElementById("author");
const bookPages = document.getElementById("pages");
const wikiLinks = document.getElementById("links");

submitBookBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const titleValue = bookTitle.value;
  const authorValue = bookAuthor.value;
  const pagesValue = bookPages.value;
  const linksValue = wikiLinks.value;

  const newBook = new Book(titleValue, authorValue, pagesValue, linksValue);
  console.log(newBook);

  myLibrary.push(newBook);

  displayBooks();
});

function displayBooks() {
  const bookUl = document.getElementById("book-list");
  bookUl.innerHTML = "";

  for (let i = 0; i < myLibrary.length; i++) {
    const book = myLibrary[i];

    const bookDiv = document.createElement("div");

    const bookLi = document.createElement("p");
    bookLi.textContent = book.info();

    const makeRemoveButton = document.createElement("button");
    makeRemoveButton.textContent = "Remove Book";

    makeRemoveButton.addEventListener("click", () => {
      myLibrary.splice(i, 1);
      displayBooks();
    });

    const hasReadRadio = document.createElement("input");
    hasReadRadio.setAttribute("type", "radio");
    hasReadRadio.setAttribute("name", "hasread");

    const notReadRadio = document.createElement("input");
    notReadRadio.setAttribute("type", "radio");
    notReadRadio.setAttribute("name", "hasread");

    const hasRead = document.createElement("span");
    hasRead.textContent = "Has read";

    const notRead = document.createElement("span");
    notRead.textContent = "Have not read";

    bookDiv.appendChild(bookLi);
    bookDiv.appendChild(makeRemoveButton);
    bookDiv.appendChild(hasRead);
    bookDiv.appendChild(hasReadRadio);
    bookDiv.append(notRead, notReadRadio);
    bookUl.appendChild(bookDiv);
  }
}

/* 
I need to display my array on my webpage by looping through the array.
I think I need to select my ul element, and create an li element.
then I need to set the textContent = the books param in display books?
Or maybe it would be myLibrary[i]
*/

//select and create my element inside the ul element
