"use strict";

const allСashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];
const getAverageValue = (allCashbox) => {
  const sum = allCashbox.reduce((a, b) => a + b);
  const length = allCashbox.length;
  return Math.floor(sum / length);
};
console.log(getAverageValue(allСashbox));
