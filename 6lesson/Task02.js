"use strict";
const isPrime = (num) => {
  if (num < 2) {
    return console.log(false);
  }
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return console.log(false);
    }
  }
  return console.log(true);
};
isPrime(1987);
