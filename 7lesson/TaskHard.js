"use strict";

const allСashbox = [
  [12, 4500],
  [7, 3210],
  [4, 650],
  [3, 1250],
  [9, 7830],
  [1, 990],
  [6, 13900],
  [1, 370],
];

allСashbox.forEach((i) => {
  const getAveragePriceGoods = i[1] / i[0];
  console.log(getAveragePriceGoods);
});
