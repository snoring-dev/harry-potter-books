import BookStore from './BookStore';

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
    cart.addBook(1);
    const totalPrice = cart.getTotalPrice();
    expect(totalPrice).toBe(8);
  });

});
