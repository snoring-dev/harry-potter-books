export default class BookStore {
  constructor() {
    this.books = [];
  }

  getTotalPrice() {
    return this.books.length * 8;
  }
}
