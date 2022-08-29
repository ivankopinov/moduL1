/* // Задача №2
const rain = Math.round(Math.random());
console.log(rain);
if (rain === 0) {
  console.log("Дождя нет!");
} else {
  console.log("Пошёл дождь. Возьмите зонт!");
}

// Задача №3
{
  let pointMath = Number(prompt(`Введите кол-во баллов по математике`));
  let pointRusLang = Number(prompt(`Введите кол-во баллов по русскому языку`));
  let pointInform = Number(prompt(`Введите кол-во баллов по информатике`));
  let pointAll = pointMath + pointRusLang + pointInform;
  if (pointAll >= 265) {
    console.log("Поздравляю, вы поступили на бюджет!");
  } else {
    console.log("Вы не набрали необходимых баллов для поступления на бюджет");
  }
} */

// Задача №4

{
  let takeMoney = Number(prompt("Укажите сумму для снятия наличных"));
  // Первый вариант
  /*   console.log(
    takeMoney % 100 === 0
      ? "Заберите деньги и не забудьте свою карту"
      : "Ошибка! Банкомат не может выдать данную сумму!"
  ); */
  // Второй вариант
  if (takeMoney % 100 === 0) {
    console.log("Заберите деньги и не забудьте свою карту");
  } else {
    console.log("Ошибка! Банкомат не может выдать данную сумму!");
  }
}
