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

  getDiscounts() {}

  getEmptyArray() {}

  createCombinations() {}

  checkout() {}
}
