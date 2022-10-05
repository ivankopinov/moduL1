"use strict";

/* Напишите рекурсивную функцию, которая принимает один параметр массив,  генерирует целое число от 0 до 10 включительно и добавляет его в массив.
Каждый раз после добавления нового числа проверяет сумму элементов массива, если она меньше 50 запускается снова передавая себе массив. Если сумма больше 50-ти, то функция возвращает этот массив. */


let newArr = [];

const foo = () => {
  newArr.push(Math.floor(Math.random() * 10));
  const total = newArr.reduce(function (total, current) {
    return (total += current);
  }, 0);
  if (total < 50) 
  foo(newArr);
};
foo(newArr);
console.log(newArr);
