console.info('============== problem 2 starts from here ==============')
class book {
    constructor(title, author, genre, isAvailable) {
        this.title = title
        this.author = author
        this.genre = genre
        this.isAvailable = isAvailable
    }
    printInfo() {
        console.log(`Title: ${this.title}`);
        console.log(`Author: ${this.author}`);
        console.log(`Genre: ${this.genre}`);
        console.log(`Available: ${this.isAvailable ? 'Yes' : 'No'}`);
        console.log('--------------------------');
    }
}

let booksarr = [
    new book('peer-e-kamil', 'umerah ahmed', 'novel', true),
    new book('rich dad poor dad', 'robert kiyosaki', 'persnol finance', true),
    new book('jannat k pattay', 'nimrah ahmed', 'novel', true),
    new book('the phychology of money', 'morgan housel', 'persnol finance', true)
]

function borrowBook(title) {
    let book = booksarr.find(b => b.title.toLowerCase() === title.toLowerCase());

    if (!book) {
        console.log(`Book titled "${title}" not found.`);
        return;
    }

    if (book.isAvailable) {
        book.isAvailable = false;
        console.log(`You have borrowed "${book.title}".`);
    } else {
        console.log(`"${book.title}" has been already borrowed`);
    }
}

function returnBook(title) {
    let book = booksarr.find(b => b.title.toLowerCase() === title.toLowerCase());

    if (!book) {
        console.log(`Book titled "${title}" not found.`);
        return;
    }

    if (book.isAvailable) {
        console.log(`You have not borrowed "${book.title}". return the book you have borrowed`);
    } else {
        book.isAvailable = true;
        console.log(`you have returned "${book.title}".`);
    }
}

borrowBook('peer-e-kamil')
returnBook('peer-e-kamil')
borrowBook('rich dad poor dad')
returnBook('rich dad poor dad')

let avalibleBooks = [];
let unavalibleBooks = [];

booksarr.forEach(book => {
    if (book.isAvailable) {
        avalibleBooks.push(book);
    } else {
        unavalibleBooks.push(book)
    }
});


console.log('Available books:', avalibleBooks);
console.log('Unavailable books:', unavalibleBooks);

// using class method
console.info('===================== books info =====================')
// booksarr.forEach(book => book.printInfo());

for (let { title, author, genre, isAvailable } of booksarr) {
    console.log(`Title: ${title}`);
    console.log(`Author: ${author}`);
    console.log(`Genre: ${genre}`);
    console.log(`Available: ${isAvailable ? 'Yes' : 'No'}`);
}
