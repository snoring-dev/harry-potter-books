export default class ShoppingCart {
  constructor() {
    this.items = new Map();
  }

  addItem(bookNumber, quantity) {
    if (this.items.has(bookNumber)) {
      const purchase = this.items.get(bookNumber);
      const newQte = quantity + purchase;
      this.items.delete(bookNumber);
      this.items.set(bookNumber, newQte);
    } else {
      this.items.set(bookNumber, quantity);
    }
  }

  getDiscounts() {
    return [0, 0, 0.05, 0.1, 0.2, 0.25];
  }

  getEmptyArray() {
    return new Array(5).fill(0);
  }

  createCombinations() {}

  checkout() {}
}
