import BookStore from "./BookStore";
import { BOOKS_VOLUMES } from "./Constants";

describe("BookStore", () => {
  let cart;

  beforeEach(() => {
    cart = new BookStore();
  });

  it("should costs 0€ when the cart is empty", () => {
    const totalPrice = cart.getTotalPrice();
    expect(totalPrice).toBe(0);
  });

  it("should cost 8€ when the cart contains one single book", () => {
    cart.addBook(BOOKS_VOLUMES.FIRST);
    const totalPrice = cart.getTotalPrice();
    expect(totalPrice).toBe(8);
  });

  it("the second book should cost 8€", () => {
    cart.addBook(BOOKS_VOLUMES.SECOND);
    const totalPrice = cart.getTotalPrice();
    expect(totalPrice).toBe(8);
  });

  it("the third book should cost 8€", () => {
    cart.addBook(BOOKS_VOLUMES.THIRD);
    const totalPrice = cart.getTotalPrice();
    expect(totalPrice).toBe(8);
  });

  it("the fourth book should cost 8€", () => {
    cart.addBook(BOOKS_VOLUMES.FOURTH);
    const totalPrice = cart.getTotalPrice();
    expect(totalPrice).toBe(8);
  });

  it("the fifth book should cost 8€", () => {
    cart.addBook(BOOKS_VOLUMES.FIFTH);
    const totalPrice = cart.getTotalPrice();
    expect(totalPrice).toBe(8);
  });

  it("two books of the same volume should cost 16€", () => {
    cart.addBook(BOOKS_VOLUMES.FIRST);
    cart.addBook(BOOKS_VOLUMES.FIRST);
    const totalPrice = cart.getTotalPrice();
    expect(totalPrice).toBe(16);
  });

  it("apply 5% discount for two different books", () => {
    cart.addBook(BOOKS_VOLUMES.FIRST);
    cart.addBook(BOOKS_VOLUMES.SECOND);
    const totalPrice = cart.getTotalPrice();
    expect(totalPrice).toBe(15.2);
  });

  it("a duplicated order of 2 different books should receive 5% discount", () => {
    cart.addBook(BOOKS_VOLUMES.FIRST);
    cart.addBook(BOOKS_VOLUMES.SECOND);
    cart.addBook(BOOKS_VOLUMES.FIRST);
    cart.addBook(BOOKS_VOLUMES.SECOND);
    const totalPrice = cart.getTotalPrice();
    expect(totalPrice).toBe(30.4);
  });

  it("two different books and one single book should receive 5% discount + 8€", () => {
    cart.addBook(BOOKS_VOLUMES.FIRST);
    cart.addBook(BOOKS_VOLUMES.SECOND);
    cart.addBook(BOOKS_VOLUMES.SECOND);
    const totalPrice = cart.getTotalPrice();
    expect(totalPrice).toBe(23.2);
  });

  it("same book three times costs 24€", () => {
    cart.addBook(BOOKS_VOLUMES.SECOND);
    cart.addBook(BOOKS_VOLUMES.SECOND);
    cart.addBook(BOOKS_VOLUMES.SECOND);
    const totalPrice = cart.getTotalPrice();
    expect(totalPrice).toBe(24);
  });

  it("three different books should receive a discount of 10%", () => {
    cart.addBook(BOOKS_VOLUMES.FIFTH);
    cart.addBook(BOOKS_VOLUMES.SECOND);
    cart.addBook(BOOKS_VOLUMES.THIRD);
    const totalPrice = cart.getTotalPrice();
    expect(totalPrice).toBe(21.6);
  });

  it("four different books should receive 20% discount", () => {
    cart.addBook(BOOKS_VOLUMES.FIFTH);
    cart.addBook(BOOKS_VOLUMES.SECOND);
    cart.addBook(BOOKS_VOLUMES.THIRD);
    cart.addBook(BOOKS_VOLUMES.FIRST);
    const totalPrice = cart.getTotalPrice();
    expect(totalPrice).toBe(25.6);
  });

  it("four books one duplicated receive 10% discount on three books", () => {
    cart.addBook(BOOKS_VOLUMES.FIFTH);
    cart.addBook(BOOKS_VOLUMES.SECOND);
    cart.addBook(BOOKS_VOLUMES.THIRD);
    cart.addBook(BOOKS_VOLUMES.THIRD);
    const totalPrice = cart.getTotalPrice();
    expect(totalPrice).toBe(29.6);
  });

  it("three books duplicated receive 10% discount", () => {
    cart.addBook(BOOKS_VOLUMES.FIFTH);
    cart.addBook(BOOKS_VOLUMES.FIFTH);
    cart.addBook(BOOKS_VOLUMES.SECOND);
    cart.addBook(BOOKS_VOLUMES.SECOND);
    cart.addBook(BOOKS_VOLUMES.THIRD);
    cart.addBook(BOOKS_VOLUMES.THIRD);
    const totalPrice = cart.getTotalPrice();
    expect(totalPrice).toBe(43.2);
  });

  it("five books two duplicated receive 10% on 3 books and 5percent on two books", () => {
    cart.addBook(BOOKS_VOLUMES.FIFTH);
    cart.addBook(BOOKS_VOLUMES.FOURTH);
    cart.addBook(BOOKS_VOLUMES.FOURTH);
    cart.addBook(BOOKS_VOLUMES.THIRD);
    cart.addBook(BOOKS_VOLUMES.THIRD);
    const totalPrice = cart.getTotalPrice();
    expect(totalPrice).toBe(36.8);
  });

  it("same book four times costs 32€", () => {
    cart.addBook(BOOKS_VOLUMES.THIRD);
    cart.addBook(BOOKS_VOLUMES.THIRD);
    cart.addBook(BOOKS_VOLUMES.THIRD);
    cart.addBook(BOOKS_VOLUMES.THIRD);
    const totalPrice = cart.getTotalPrice();
    expect(totalPrice).toBe(32);
  });
});
