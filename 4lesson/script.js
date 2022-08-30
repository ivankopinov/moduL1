"use strict";

// Задача №1
{
  let userProduct = prompt("Введите наименование товара?");
  let userCategory = prompt("Введите категорию товара?");
  let userPrice = Number(prompt("Введите стоимость товара?"));
  let userAmount = Number(prompt("Введите количество товара?"));
  if (userAmount >= 0 && userPrice >= 0) {
    console.log(
      "На складе " +
        userAmount +
        " единицы товара " +
        userProduct +
        " на сумму " +
        userAmount * userPrice +
        " рублей"
    );
  } else {
    console.log("Вы ввели некорректные данные");
  }
}

{
  const productName = "Наименование товара: Пальто";
  const productAmount = 20;
  const productCategory = "Мужская верхняя одежда";
  const productPrice = 8499;
  console.log(productName);
}

{
  const productName = "Наименование товара: Микроволновая печь Samsung";
  const productAmount = 50;
  const productCategory = "Техника для кухни";
  const productPrice = 4590;
  console.log(productName);
}
