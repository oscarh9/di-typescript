class Book{
    title: string;
    constructor (title: string) {
        this.title = title;
    }

    read () {
        return "Reading book"
    }
}

class PaperBook extends Book{
    pages: number;
    constructor (title: string, pages: number) {
        super (title);
        this.pages = pages;
    }

    read () {
        return "Book in paper"
    }
}

class ElectronicBook extends Book{
    size: number;
    constructor (title: string, size: number) {
        super (title);
        this.size = size;
    }

    read () {
        return "Book in digital"
    }
}

class ParchmentBook extends Book{
    large: number;
    constructor (title: string, large:number) {
        super (title);
        this.large = large;
    }

    read () {
        return "Book in parchment"
    }
}

class ReadBook{
    books: Book;
    constructor (books: Book) {
        this.books = books;
    }

    read () {
       return this.books.read()
    }
}


const phisicalBook = new PaperBook("Dragones de papel",350);
const digitalBook = new ElectronicBook("One piece",150);
const readerPaper = new ReadBook(phisicalBook);
const readerDigital= new ReadBook(digitalBook);

console.log (readerDigital.read());
console.log(readerPaper.read());
