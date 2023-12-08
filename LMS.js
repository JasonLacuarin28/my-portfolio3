
let availableBooks = [
  { title: "Book 1", image: "barbie1.jpg", borrowedBy: "", borrowedTime: null, returnedTime: null },
  { title: "Book 2", image: "barbie2.jpg", borrowedBy: "", borrowedTime: null, returnedTime: null },
  { title: "Book 3", image: "barbie3.jpg", borrowedBy: "", borrowedTime: null, returnedTime: null },
  { title: "Book 4", image: "barbie4.jpg", borrowedBy: "", borrowedTime: null, returnedTime: null },
  { title: "Book 5", image: "barbie5.jpg", borrowedBy: "", borrowedTime: null, returnedTime: null },
  { title: "Book 6", image: "barbie6.jpg", borrowedBy: "", borrowedTime: null, returnedTime: null },
  { title: "Book 7", image: "barbie7.jpg", borrowedBy: "", borrowedTime: null, returnedTime: null },
  { title: "Book 8", image: "barbie8.jpg", borrowedBy: "", borrowedTime: null, returnedTime: null },
  { title: "Book 9", image: "barbie9.jpg", borrowedBy: "", borrowedTime: null, returnedTime: null },
  { title: "Book 10", image: "barbie10.jpg", borrowedBy: "", borrowedTime: null, returnedTime: null },
  { title: "Book 11", image: "barbie11.jpg", borrowedBy: "", borrowedTime: null, returnedTime: null },
  { title: "Book 12", image: "barbie12.jpg", borrowedBy: "", borrowedTime: null, returnedTime: null },
  { title: "Book 13", image: "barbie13.jpg", borrowedBy: "", borrowedTime: null, returnedTime: null },
  { title: "Book 14", image: "barbie14.jpg", borrowedBy: "", borrowedTime: null, returnedTime: null },
  { title: "Book 15", image: "barbie15.jpg", borrowedBy: "", borrowedTime: null, returnedTime: null }
];




let borrowedBooks = [];

function displayAvailableBooks() {
  const availableBooksList = document.getElementById("availableBooks");
  availableBooksList.innerHTML = "";
  availableBooks.forEach(book => {
    const li = document.createElement("li");

    const img = document.createElement("img");
    img.src = `images/${book.image}`;
    img.alt = book.title;
    img.width = 100; 
    img.height = 150; 
    li.appendChild(img);

    const textSpan = document.createElement("span");
    textSpan.textContent = `${book.title} - Borrowed by: ${book.borrowedBy || 'Available'}`;
    li.appendChild(textSpan);

    availableBooksList.appendChild(li);
  });
}

function displayBorrowedBooks() {
  const borrowedBooksList = document.getElementById("borrowedBooks");
  borrowedBooksList.innerHTML = "";
  borrowedBooks.forEach(book => {
    const li = document.createElement("li");

    const img = document.createElement("img");
    img.src = `images/${book.image}`;
    img.alt = book.title;
    img.width = 100; 
    img.height = 150; 
    li.appendChild(img);

    const borrowInfo = book.borrowedBy ? `Borrowed by: ${book.borrowedBy}, Borrowed Time: ${book.borrowedTime}, Returned Time: ${book.returnedTime || 'Not Returned'}` : '';
    const textNode = document.createTextNode(`${book.title} - ${borrowInfo}`);
    li.appendChild(textNode);

    borrowedBooksList.appendChild(li);
  });
}

function borrowBook() {
  const bookInput = document.getElementById("bookInput").value;
  const bookIndex = availableBooks.findIndex(book => book.title === bookInput);
  
  if (bookIndex !== -1 && availableBooks[bookIndex].borrowedBy === "") {
    const borrowedBook = availableBooks.splice(bookIndex, 1)[0];
    borrowedBook.borrowedBy = prompt("Enter your name:");
    borrowedBook.borrowedTime = new Date().toLocaleString();
    borrowedBooks.push(borrowedBook);
    displayAvailableBooks();
    displayBorrowedBooks();
  } else if (bookIndex !== -1 && availableBooks[bookIndex].borrowedBy !== "") {
    alert("Book is already borrowed!");
  } else {
    alert("Book not found or already borrowed!");
  }
}

function returnBook() {
  const bookInput = document.getElementById("bookInput").value;
  const bookIndex = borrowedBooks.findIndex(book => book.title === bookInput);
  
  if (bookIndex !== -1) {
    const returnedBook = borrowedBooks.splice(bookIndex, 1)[0];
    returnedBook.borrowedBy = "";
    returnedBook.returnedTime = new Date().toLocaleString();
    availableBooks.push(returnedBook);
    displayAvailableBooks();
    displayBorrowedBooks();
  } else {
    alert("Book not found or not borrowed!");
  }
}


displayAvailableBooks();
displayBorrowedBooks();

// LMS.js

// Existing code remains unchanged

function libraryReport() {
  const totalBooks = availableBooks.length + borrowedBooks.length;
  const availableCount = availableBooks.length;
  const borrowedCount = borrowedBooks.length;

  alert(`Total Books: ${totalBooks}\nAvailable Books: ${availableCount}\nBorrowed Books: ${borrowedCount}`);
}

// Initial display of books
displayAvailableBooks();
displayBorrowedBooks();




