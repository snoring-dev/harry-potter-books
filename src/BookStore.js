import { SINGLE_BOOK_PRICE } from "./Constants";

export default class BookStore {
  constructor() {
    this.books = [];
  }

  getTotalPrice() {
    const numberOfDistinctBooks = this.getDistinctBooks().size;
    if (numberOfDistinctBooks === 2) {
      return numberOfDistinctBooks * SINGLE_BOOK_PRICE * 0.95;
    } else {
      return this.books.length * SINGLE_BOOK_PRICE;
    }
  }

  getDistinctBooks() {
    return new Set(this.books);
  }

  addBook(volume) {
    this.books.push(volume);
  }
}
