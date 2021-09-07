"use strict";
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
module.exports = {findTitles , showTitles , findAuthors , findIDs, addBook}; //add all of your function names here that you need for the node mocha tests


let library = [
    { title: "The Road Ahead", author: "Bill Gates", libraryID: 1254 },
    { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4264 },
    { title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins", libraryID: 3245 }
];


function showTitles() {
    /* put all titles into an array, then sort, then join with newline and insert in textarea innerHTML */
     
    const titles = findTitles();
     
    titles.sort();
    const titleString = titles.join("\n");
    }
     
    /**
     *
     * @return{Array} array holding all titles as elements
     */
    function findTitles() {
     let titles = [];
    for (let book of library) {
    titles.push(book.title);
      }
    titles.sort();
    return titles;
    }
     
    /**
     *
     * @return{Array} array holding all titles as elements
     */
     
    function findAuthors() {
    let authors = [];
    for (let book of library) {
    authors.push(book.author);
      }
    authors.sort();
    return authors;
    }
     
    /**
     *
     * @return{Array} array holding all titles as elements
     */
    function findIDs() {
    let ids = [];
    for (let book of library) {
    ids.push(book.libraryID);
      }
    ids.sort();
    return ids;
    }

    /**
     * @returns{undefined} no return
     * Event handler for Add book button.  Creates and adds book to the library
     */
    function addBook(title, author, libraryID) {
    const newBook = {};
    
    newBook.title = title;
    newBook.author = author;
    newBook.libraryID = libraryID;
     
    library.push(newBook);
    return newBook;
    }
