"use strict";
const randomArray = (length, min, max) => {
  Array(length)
    .fill()
    .map(() => Math.round(Math.random() * (max - min) + min));
  if (min > max) return randomArray(length, max, min);
  return Array(length)
    .fill()
    .map(() => Math.round(Math.random() * (min - max) + max));
};
console.log(randomArray(52, -2, 33));
randomArray();
