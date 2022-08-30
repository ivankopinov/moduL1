"use strict";

let userMoney = Number(prompt("Введите сумму вашего заработка?"));
let userChangeTwenty = userMoney - 15000;
let userChangeFifty = userMoney - 50000;
const userTwenty = 15000;
const userFifty = 50000;
if (userMoney <= 15000) {
  console.log("Налог на заработок составляет: ", userMoney * 0.13, "₽");
} else if (userMoney > 15000 && userMoney <= 50000) {
  console.log(
    "Налог на заработок составляет: ",
    userTwenty * 0.13 + userChangeTwenty * 0.2,
    "₽"
  );
} else {
  console.log(
    "Налог на заработок составляет: ",
    userFifty * 0.13 + userChangeFifty * 0.3,
    "₽"
  );
}
