//1
class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name=name;
        this.releaseDate=releaseDate;
        this.pagesCount=pagesCount;
        this.state=100;
        this.type=null;
    }
    fix() {
        this.state=this.state*(15/100);
    }
    set state(value) {
        if (value<0) {
            this._state=0;
        } else if (value>100) {
            this._state=100;
        } else {
            this._state=value;
        }
    }
    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem{
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type="magazine";
    }

}
class Book extends PrintEditionItem{
    constructor(name, releaseDate, pagesCount, author) {
        super(name, releaseDate, pagesCount);
        this.author=author;
        this.type="book";
    }   
}


class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type="novel";
    }  
}
class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type="fantastic";
    }  
}
class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type="detective";
    }  
}

//2
class Library {
    constructor(name, books) {
        this.name=toString(name);
        this.books=[...books];

    }
    addBook(book) {
        if (this.state>30)
        this.books.push(book);
    }
    findBookBy(type, value) {
        if (this.name.includes(type)===true || this.books.includes(value)===true) {
            return this.name=value;
        } else {
            return null
        }
    }
}