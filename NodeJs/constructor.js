function Book(title,author,pages,read) {
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read;
    this.info = () =>{
        return `${title} by ${author}, ${pages} pages, ${read}`
    }
}

const hobbit = new Book("The Hobbit","J.R.R Tolkien",295,"Not read yet");
console.log(hobbit.info());