import ShoppingCart from './ShoppingCart';

describe('ShoppingCart', () => {
  let cart;

  beforeEach(() => {
    cart = new ShoppingCart();
  });

  describe('addItem', () => {
    it('should add a new item to the cart with a book number and a quatity', () => {
      cart.addItem(1, 2);
      expect(cart.items.size).toBe(1);
      expect(cart.items.get(1)).toBe(2);
    });

    it('should increase the quantity of an existing item in the cart', () => {
      cart.addItem(1, 2);
      cart.addItem(1, 3);
      expect(cart.items.size).toBe(1);
      expect(cart.items.get(1)).toBe(5);
    });
  });

  describe('getDiscounts', () => {
    it('should return an array of discounts', () => {
      const discounts = cart.getDiscounts();
      expect(discounts).toEqual([0, 0, 0.05, 0.1, 0.2, 0.25]);
    });
  });

  describe('getEmptyArray', () => {
    it('should return an array of zeroes with length 5 (5-tuples)', () => {
      const emptyArray = cart.getEmptyArray();
      expect(emptyArray).toEqual([0, 0, 0, 0, 0]);
      expect(emptyArray.length).toBe(5);
    });
  });

  describe('createCombinations', () => {
    it('should create combinations of books based on cart items', () => {
      cart.addItem(1, 2);
      cart.addItem(2, 1);
      const combinations = cart.createCombinations();
      expect(combinations).toEqual([[1, 1, 0, 0, 0], [1, 0, 0, 0, 0]]);
    });
  });

  describe('checkout', () => {
    it('should calculate the total price for a basket', () => {
      cart.addItem(1, 2);
      cart.addItem(2, 2);
      cart.addItem(3, 2);
      cart.addItem(4, 1);
      cart.addItem(5, 1);
      const totalPrice = cart.checkout();
      expect(totalPrice).toBe('51.20');
    });
  });
});
