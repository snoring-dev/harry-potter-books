import BookStore from './BookStore';
import { BOOKS_VOLUMES } from './Constants';

describe('BookStore', () => {
  let cart;

  beforeEach(() => {
    cart = new BookStore();
  });

  it('should costs 0€ when the cart is empty', () => {
    const totalPrice = cart.getTotalPrice();
    expect(totalPrice).toBe(0);
  });

  it('should cost 8€ when the cart contains one single book', () => {
    cart.addBook(BOOKS_VOLUMES.FIRST);
    const totalPrice = cart.getTotalPrice();
    expect(totalPrice).toBe(8);
  });

  it('The second book should cost 8€', () => {
    cart.addBook(BOOKS_VOLUMES.SECOND);
    const totalPrice = cart.getTotalPrice();
    expect(totalPrice).toBe(8);
  });

  it('The third book should cost 8€', () => {
    cart.addBook(BOOKS_VOLUMES.THIRD);
    const totalPrice = cart.getTotalPrice();
    expect(totalPrice).toBe(8);
  });

  it('The fourth book should cost 8€', () => {
    cart.addBook(BOOKS_VOLUMES.FOURTH);
    const totalPrice = cart.getTotalPrice();
    expect(totalPrice).toBe(8);
  });

  it('The fifth book should cost 8€', () => {
    cart.addBook(BOOKS_VOLUMES.FIFTH);
    const totalPrice = cart.getTotalPrice();
    expect(totalPrice).toBe(8);
  });

  it('Two books of the same volume should cost 16€', () => {
    cart.addBook(BOOKS_VOLUMES.FIRST);
    cart.addBook(BOOKS_VOLUMES.FIRST);
    const totalPrice = cart.getTotalPrice();
    expect(totalPrice).toBe(16);
  });

  it('apply 5% discount for two different books', () => {
    cart.addBook(BOOKS_VOLUMES.FIRST);
    cart.addBook(BOOKS_VOLUMES.SECOND);
    const totalPrice = cart.getTotalPrice();
    expect(totalPrice).toBe(15.2);
  });

});
