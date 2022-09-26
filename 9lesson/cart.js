const cart = {
  items: [],
  totalPrice: 0,
  count: 0,
  clear() {
    this.items = [];
    this.totalPrice = 0;
    this.count = 0;
  },
  getTotalPrice() {
    return this.totalPrice;
  },
  print() {
    return `${JSON.stringify(this.items)} ${this.totalPrice}`;
  },
  increaseCount(quantity) {
    return this.count += quantity;
  },

  add(item, price, quantity = 1) {
    const newObj = {
      item: item,
      price: price,
      quantity: quantity,
    };
    this.items.push(newObj);
    this.increaseCount(quantity);
  },
  calculateItemPrice(price, quantity) {
    return this.totalPrice += quantity * price;
  },
};
cart.add("туфли", 100, 5);
cart.add("пальто", 5000, 10);
console.log(cart);

