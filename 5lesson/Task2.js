"use strict";

let modifyCase = (a, b) => {
  let correctHello =
    a.charAt(0).toUpperCase() +
    a.substring(1).toLowerCase() +
    b.slice().toLowerCase();
  return console.log(correctHello);
};
modifyCase("ПРИВЕТ ", "МИР");
