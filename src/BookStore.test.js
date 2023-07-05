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

});
