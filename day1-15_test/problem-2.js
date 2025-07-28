console.info('============== problem 2 starts from here ==============')
class book {
    constructor(title, author, genre, isAvailable) {
        this.title = title
        this.author = author
        this.genre = genre
        this.isAvailable = isAvailable
    }
}

let booksarr = [
    new book('peer-e-kamil', 'umerah ahmed', 'novel', true),
    new book('rich dad poor dad', 'robert kiyosaki', 'persnol finance', false),
    new book('jannat k pattay', 'nimrah ahmed', 'novel', false),
    new book('the phychology of money', 'morgan housel', 'persnol finance', true)
]

function getbook() {
    let borrowedBook = 'peer-e-kamil'
    if (borrowedBook === book.title) {
        book.isAvailable === false
        console.log('you can borrow the book')
    }
    if (book.isAvailable === false) {
        console.log('you can not borrow this book its already taken')
    }
}
getbook()

let avalibleBooks = [];
let unavalibleBooks = [];

// for (let book of booksarr) {
//     if (book.isAvailable === true) {
//         avalibleBooks.push(book);
//     } else {
//         unavalibleBooks.push(book)
//     }
//     // console.log(book)
// }

booksarr.forEach(function (book) {
    if (book.isAvailable === true) {
        avalibleBooks.push(book);
    } else {
        unavalibleBooks.push(book)
    }
})

console.log(`avalibe books : ${avalibleBooks}`)
console.log(`unavalibe books : ${unavalibleBooks}`)

