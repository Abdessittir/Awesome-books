class BookCollection {
  books;

  #isLocalStorage;

  constructor(books = []) {
    this.books = books;
    try {
      localStorage.getItem('x', 'test');
      this.#isLocalStorage = true;
    } catch (err) {
      this.#isLocalStorage = false;
    }
  }

  getBooks() {
    if (this.#isLocalStorage) {
      const parsedBooks = JSON.parse(localStorage.getItem('books'));
      if (parsedBooks) {
        this.books = [...this.books, ...parsedBooks];
      }
    }
  }

  add(book) {
    const format = {
      ...book,
      id: String(Math.random()),
    };
    this.books.push(format);
    if (this.#isLocalStorage) this.#storeBooks();
  }

  remove(id) {
    this.books = this.books.filter((book) => book.id !== id);
    if (this.#isLocalStorage) this.#storeBooks();
  }

  #storeBooks() {
    localStorage.setItem('books', JSON.stringify(this.books));
  }
}

export default BookCollection;