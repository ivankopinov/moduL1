"use strict";
const randomCheck = (min, max, param) => {
  let randomNumber = Math.round(Math.random() * (min - max) + max);
  if(param === 'even'){
    while(randomNumber%2){
    randomNumber = randomCheck(min, max, param)
    }
  }
  if(param === 'odd'){
    while(!randomNumber%2){
    randomNumber = randomCheck(min, max, param)
  }
}
return randomNumber;
}
const randomArray = (length, min, max, param) => {
 
  if (min > max) return randomArray(length, min, max, param);
  const arr = Array(length)
    .fill()
    .map(() => randomCheck(min, max, param))
    return arr
};
console.log(randomArray(10, 30, 33, 'odd'));
