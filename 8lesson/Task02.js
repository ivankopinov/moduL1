"use strict";
const randomArray = (length, min, max) => {
 
  if (min > max) return randomArray(length, max, min);
  const arr = Array(length)
    .fill()
    .map(() => Math.round(Math.random() * (min - max) + max));
    return arr
};
console.log(randomArray(52, -2, 33));

