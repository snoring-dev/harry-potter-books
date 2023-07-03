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

  getSortedCart() {
    const _cart = new Map(
      [...this.items.entries()].sort((a, b) => b[1] - a[1])
    );
    return _cart;
  }

  createCombinations() {
    const all = [];
    const sortedCart = this.getSortedCart();

    for (let [bookNumber, qte] of sortedCart) {
      for (let i = 0; i < qte; i++) {
        // look if there is already a collection
        const entry = all[i] ? all[i] : this.getEmptyArray();
        entry[bookNumber - 1] = 1;
        if (!all[i]) all.push(entry);
      }
    }

    return all;
  }

  checkout() {}
}
