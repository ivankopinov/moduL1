"use strict";

const randomArray = (length) =>
  Array(length)
    .fill()
    .map(() => Math.round(Math.random() * 100));
console.log(randomArray(100));
