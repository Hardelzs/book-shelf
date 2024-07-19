

const titleBook = document.querySelector("#book-title");
const authorName = document.querySelector("#book-author");
const publishYear = document.querySelector("#book-publish");
const addNewBookHa = document.querySelector(".button");
const tableBody = document.querySelector("tbody");

// this emma type shit 
/**
 *@type {Book[]}
 */
const storedBooks = getStoredBooks();

populateTable()

// after clicking the add button 
addNewBookHa.addEventListener("click", addNewBook);

function populateTable(){

  tableBody.innerHTML = ""

  storedBooks.forEach(book => {
    const tr = document.createElement("tr");
    const tdTitle = document.createElement("td");
    const tdAuthor = document.createElement("td");
    const tdPublish = document.createElement("td");

    tdTitle.textContent = book.title;
    tdAuthor.textContent = book.author;
    tdPublish.textContent = book.publishYear;

    tr.appendChild(tdTitle);
    tr.appendChild(tdAuthor);
    tr.appendChild(tdPublish);
    tableBody.appendChild(tr);
  })
}

function addNewBook() {
  if (
    titleBook.value === "" ||
    authorName.value === "" ||
    publishYear.value === ""
  ) {
    validateTextBox();
  } else {
    titleBook.classList.remove("required-text");
    authorName.classList.remove("required-text");
    publishYear.classList.remove("required-text");

    // Store book data in Local Storage
    const newBook = {
      title: titleBook.value,
      author: authorName.value,
      publishYear: publishYear.value,
    };
    
    console.log(newBook)
    
    storedBooks.push(newBook);
    
    populateTable()
    
    clearInput();

    localStorage.setItem("books", JSON.stringify(storedBooks));
  }
}

// just put in the popup nigga there 

function validateTextBox() {
  // this will pop in the nigga i did 
 const merge = document.getElementById("popup")
 const padButton = document.getElementById('btn')
 merge.style.display = 'block';

 // this will remove the nigga 
 padButton.addEventListener("click", () => {
  merge.style.display = 'none';
 })
 
  if (titleBook.value === "") {
    titleBook.focus();
    titleBook.classList.add("required-text");
  } else if (authorName.value === "") {
    authorName.focus();
    titleBook.classList.remove("required-text");
    authorName.classList.add("required-text");
  } else if (publishYear.value === "") {
    publishYear.focus();
    titleBook.classList.remove("required-text");
    authorName.classList.remove("required-text");
    publishYear.classList.add("required-text");
  } else {
    titleBook.classList.remove("required-text");
    authorName.classList.remove("required-text");
    publishYear.classList.remove("required-text");
  }
}


function clearInput() {
  titleBook.value = "";
  authorName.value = "";
  publishYear.value = "";
  titleBook.focus();
}

function getStoredBooks() {
  // Retrieve stored books from Local Storage (or return empty array if none)
 
  return JSON.parse(localStorage.getItem("books") || "[]");


}


const searchInput = document.getElementById("searchInput");


const namesFromDOM = document.getElementsByTagName("td");


searchInput.addEventListener("keyup", (event) => {
    const { value } = event.target;
    
    // lowercase of input
    const searchQuery = value.toLowerCase();
    
    for (const nameElement of namesFromDOM) {
        // lowercase shit converter
        let name = nameElement.textContent.toLowerCase();
        
        // compare current name to search input
        if (name.includes(searchQuery)) {
            // found name matching search, display it
            nameElement.style.color = 'red';
        } else {
            // no match, don't display name
            nameElement.style.color = "white";
        }
        if(name == ''){
          nameElement.style.color = 'red';
        }
    }
});