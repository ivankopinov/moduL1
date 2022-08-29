"use strict";

{
  const userProduct = prompt(`Введите наименование товара?`);
  const userCategory = prompt(`Введите категорию товара?`);
  const userPrice = Number(prompt(`Введите стоимость товара?`));
  const userAmount = Number(prompt(`Введите количество товара?`));
  console.log(
    "На складе " +
      userAmount +
      " единицы товара " +
      userProduct +
      " на сумму " +
      userAmount * userPrice +
      " рублей"
  );
}


/* {
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
 */
