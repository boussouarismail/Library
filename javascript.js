const addBook1 = document.querySelector('#addBook1');
const addBook = document.querySelector('#addBook');
const popUps = document.querySelector('.popUps');
const blur = document.querySelector('.blur');
const books = document.querySelector('.books');

let myLibrary = [];

class Librarian {
    constructor(name){
        this.name = name;
    }

    addBook(book){
        myLibrary.push(book);
    }

    buildCard(obj) {
        const content = document.createElement('div');
        content.classList.add('content');
        content.innerHTML = 
            obj.title +"<br>"+
            obj.author +"<br>"+ 
            obj.nPages +"<br>"+ 
            "<button class='rmv' id='"+(myLibrary.indexOf(obj))+"' onclick='toggleSt.call(this)'> "+obj.read+" </button>"+
            "<button class='rmv' id='"+(myLibrary.indexOf(obj))+"' onclick='removeBookBtn.call(this)'> remove book </button>"
            ;
    
        books.appendChild(content); 
    }

    displayBooks(myLibrary){
        books.textContent = "";
        for(let i = 0 ; i < myLibrary.length ;i++){
            this.buildCard(myLibrary[i])
        }  
    }

    removeBook(index) {
        myLibrary.splice(index,1);
        this.displayBooks(myLibrary);
    }
}

class Book {
    constructor (title,author,nPages,read){
        this.title = title,
        this.author = author,
        this.nPages = nPages,
        this.read = read
    }

}

const librarian = new Librarian();

addBook.addEventListener("click",() => {
    popUps.style.display = "grid";
    blur.style.display = "grid";
});


addBook1.addEventListener("click",(event) => {
    event.preventDefault()

    let book = new Book(document.querySelector('#title').value,
                        document.querySelector('#author').value,
                        !document.querySelector('#nPages').valueAsNumber ? 0 : document.querySelector('#nPages').valueAsNumber,
                        document.querySelector('#read').checked ? "read" : "not read"
                        );
    
    librarian.addBook(book)
    popUps.style.display = "none";
    blur.style.display = "none";
    librarian.displayBooks(myLibrary);
    
});

function removeBookBtn(){
    console.log(this.id);
    console.log(this);
    librarian.removeBook(this.id);
}

function toggleSt() {
    //console.log(this);
    //console.log(this.textContent);
    myLibrary[this.id].read =  this.textContent == "read" ? "not read": "read";  
    this.textContent = this.textContent == "read" ? "not read": "read";
}
    



