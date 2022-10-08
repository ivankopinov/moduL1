"use strict";

const cart = {
  items: [],
  count: 0,
  clear() {
    this.items = [];
    this.totalPrice = 0;
    this.count = 0;
  },
  discount: 0,
  set setDiscount(promocode) {
    if (promocode == "METHED") {
      return (this.discount = 15);
    }
    if (promocode == "NEWYEAR") {
      return (this.discount = 21);
    }
  },
  get TotalPrice() {
    return this.calculateItemPrice(this.items);
  },
  print() {
    return `${JSON.stringify(this.items)} ${this.totalPrice}`;
  },
  increaseCount(quantity) {
    return (this.count += quantity);
  },
  calculateItemPrice(items) {
    let totalPrice = 0;
    items.forEach((item) => {
      totalPrice += item.price * item.quantity;
    });
    return totalPrice * ((100 - this.discount) / 100);
  },
  add(item, price, quantity = 1) {
    const newObj = { item, price, quantity };
    this.items.push(newObj);
    this.increaseCount(quantity);
  },
};
cart.add("туфли", 100, 5);
cart.add("пальто", 6000);
cart.add("шапка меховая", 4250, 21);
console.log(cart);
console.log(cart.TotalPrice);
