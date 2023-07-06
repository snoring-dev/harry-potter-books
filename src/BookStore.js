import { SINGLE_BOOK_PRICE } from "./Constants";

export default class BookStore {
  constructor() {
    this.books = new Map();
  }

  getTotalPrice() {
    const remainingBooks = new Map(this.books);
    let numberOfBooks = this.getNumberOfBooks(remainingBooks);
    let numberOfDistinctBooks = this.getNumberOfDistinctBooks(remainingBooks);
    let totalPrice = 0;

    while (numberOfBooks > 0) {
      if (numberOfDistinctBooks === 4) {
        totalPrice += 4 * SINGLE_BOOK_PRICE * 0.8;
      } else if (numberOfDistinctBooks === 3) {
        totalPrice += 3 * SINGLE_BOOK_PRICE * 0.9;
      } else if (numberOfDistinctBooks === 2) {
        totalPrice += 2 * SINGLE_BOOK_PRICE * 0.95;
      } else {
        totalPrice += SINGLE_BOOK_PRICE;
      }

      this.removeOneBookOnEachVolume(remainingBooks);
      numberOfBooks = this.getNumberOfBooks(remainingBooks);
      numberOfDistinctBooks = this.getNumberOfDistinctBooks(remainingBooks);
    }

    return totalPrice;
  }

  removeOneBookOnEachVolume(booksOrder) {
    const distinctBooksKeys = [...booksOrder.keys()];
    for (let i = 0; i < distinctBooksKeys.length; i++) {
      const book = Number(distinctBooksKeys[i]);
      const amount = Number(booksOrder.get(book));
      if (amount <= 1) {
        booksOrder.delete(Number(book));
      } else {
        booksOrder.set(Number(book), amount - 1);
      }
    }
  }

  getNumberOfDistinctBooks(remainingBooks) {
    return remainingBooks.size;
  }

  getNumberOfBooks(remainingBooks) {
    let booksCount = 0;

    if (remainingBooks && remainingBooks.size > 0) {
      remainingBooks.forEach((value) => (booksCount += value));
    }

    return booksCount;
  }

  addBook(volume) {
    let amount = 0;
    if (this.books.has(volume)) {
      amount = this.books.get(volume);
    }
    this.books.set(volume, amount + 1);
  }
}
