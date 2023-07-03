export default class ShoppingCart {
  constructor() {
    this.items = new Map();
  }

  addItem(bookNumber, quantity) {
    if (this.items.has(bookNumber)) {
      const purchasedBooks = this.items.get(bookNumber);
      const newQte = quantity + purchasedBooks;
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
    const baskets = [];
    const sortedCart = this.getSortedCart();

    for (let [bookNumber, qte] of sortedCart) {
      for (let i = 0; i < qte; i++) {
        // look if there is already a collection
        const entry = baskets[i] ? baskets[i] : this.getEmptyArray();
        entry[bookNumber - 1] = 1;
        if (!baskets[i]) baskets.push(entry);
      }
    }

    return baskets;
  }

  checkout() {
    const baskets = this.createCombinations();
    let total = 0;

    baskets.forEach((basket, index) => {
      const sum = basket.reduce((a, b) => a + b, 0);
      const discount = this.getDiscounts()[sum];
      const regularPrice = sum * 8;
      const finalPrice = regularPrice - regularPrice * discount;
      total += finalPrice;
    });

    return total.toFixed(2);
  }
}
