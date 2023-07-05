import { SINGLE_BOOK_PRICE } from "./Constants";

export default class BookStore {
  constructor() {
    this.books = new Map();
    this.numberOfBooks = 0;
  }

  getTotalPrice() {
    const numberOfDistinctBooks = this.getNumberOfDistinctBooks();
    if (numberOfDistinctBooks === 2) {
      return numberOfDistinctBooks * SINGLE_BOOK_PRICE * 0.95;
    }

    return this.numberOfBooks * SINGLE_BOOK_PRICE;
  }

  getNumberOfDistinctBooks() {
    return this.books.size;
  }

  addBook(volume) {
    let amount = 0;
    if (this.books.has(volume)) {
      amount = this.books.get(volume);
    }
    this.books.set(volume, amount + 1);
    this.numberOfBooks += 1;
  }
}
