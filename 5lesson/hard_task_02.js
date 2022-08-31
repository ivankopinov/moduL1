"use strict";

let a = Number(prompt("Введите первое число"));
let b = Number(prompt("Введите второе число"));
const min = () => {
  if (a < b) {
    return console.log(a);
  } else {
    return console.log(b);
  }
};
min();
