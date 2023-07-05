export default class BookStore {
  constructor() {
    this.books = [];
  }

  getTotalPrice() {
    return this.books.length * 8;
  }

  addBook(volume) {
    this.books.push(volume);
  }
}
