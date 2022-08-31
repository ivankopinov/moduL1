"use strict";

// Первый вариант

let reverseString = (a) => {
  let arr = a.split("");
  arr.reverse();
  let newString = arr.join(" ");
  return console.log(newString);
};
reverseString("Привет мир");

// Второй вариант

/* let reverseString = (a) => {
  return console.log(a.split("").reverse().join(" "));
};
reverseString("Привет мир");
 */
