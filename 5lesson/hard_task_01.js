"use strict";

const NOD = (a, b) => {
  if (b > a) return NOD(b, a);
  if (!b) return a;
  return NOD(b, a % b);
};
console.log(NOD(150, 300));
