console.info('============== problem 2 starts from here ==============')
class books {
    constructor(title, author, genre, isAvailable) {
        this.title = title
        this.author = author
        this.genre = genre
        this.isAvailable = isAvailable
    }
}

let booksarr = [
    new books('peer-e-kamil', 'umerah ahmed', 'novel', true),
    new books('rich dad poor dad', 'robert kiyosaki', 'persnol finance', true),
    new books('jannat k pattay', 'nimrah ahmed', 'novel', true),
    new books('the phychology of money', 'morgan housel', 'persnol finance', true)
]

function getbook() {
    let borrowedBook = 'peer-e-kamil'
    if (borrowedBook === books.title) {
        books.isAvailable === false
        console.log('you can borrow the book')
    } 
    if(books.isAvailable === false){
        console.log('you can not borrow this book its already taken')
    }
}
getbook()
