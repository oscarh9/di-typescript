"use strict";
class Book {
    constructor(title) {
        this.title = title;
    }
    read() {
        return "Reading book";
    }
}
class PaperBook extends Book {
    constructor(title, pages) {
        super(title);
        this.pages = pages;
    }
    read() {
        return "Book in paper";
    }
}
class ElectronicBook extends Book {
    constructor(title, size) {
        super(title);
        this.size = size;
    }
    read() {
        return "Book in digital";
    }
}
class ParchmentBook extends Book {
    constructor(title, large) {
        super(title);
        this.large = large;
    }
    read() {
        return "Book in parchment";
    }
}
class ReadBook {
    constructor(books) {
        this.books = books;
    }
    read() {
        return this.books.read();
    }
}
const phisicalBook = new PaperBook("Dragones de papel", 350);
const digitalBook = new ElectronicBook("One piece", 150);
const readerPaper = new ReadBook(phisicalBook);
const readerDigital = new ReadBook(digitalBook);
console.log(readerDigital.read());
console.log(readerPaper.read());
