"use strict";
class Book {
}
class PaperBook {
}
class ElectronicBook {
}
class ParchmentBook {
}
class ReadBook {
}
const phisicalBook = new PaperBook("Dragones de papel", 350);
const digitalBook = new ElectronicBook("One piece", 150);
const readerPaper = new ReadBook(phisicalBook);
const readerDigital = new ReadBook(digitalBook);
console.log(readerDigital.read());
console.log(readerPaper.read());
