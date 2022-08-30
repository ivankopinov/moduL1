"use strict";

let userMoney = Number(prompt("Введите сумму вашего заработка?"));
if (userMoney <= 15000) {
  console.log("Налог на заработок составляет: ", userMoney * 0.13, "₽");
} else if (userMoney <= 50000) {
  console.log("Налог на заработок составляет: ", userMoney * 0.2, "₽");
} else {
  console.log("Налог на заработок составляет: ", userMoney * 0.3, "₽");
}
