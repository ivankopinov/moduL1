"use strict";

let userSale;
let newCart;
const calculate = (cart, goods, promoOne, promoTwo) => {
  if (goods >= 10) {
    userSale = cart * 0.03;
    newCart = cart - userSale;
    console.log(newCart);
  }

  if (cart > 30000) {
    userSale = (cart - 30000) * 0.15;
    newCart = newCart - userSale;
    console.log(newCart);
  }
  if (promoOne === `METHED`) {
    userSale = newCart * 0.1;
    newCart = newCart - userSale;
    console.log(newCart);
  }
  if (promoTwo === "G3H2Z1" && newCart > 2000) {
    newCart = newCart - 500;
    console.log(newCart);
  }
};
calculate(4000, 10, `METHED`, "G3H2Z1");
