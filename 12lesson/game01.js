
let input,
  number,
  random = Math.floor(Math.random() * 100);

const game = () => {
  (input = prompt("Я загадал число от 0 до 100. Попробуй отгадай!:)")) !== null;
  if ((number = +input) !== parseFloat(input) || !Number.isFinite(number));

  if (input > random) {
    alert("Меньше!");
  } else if (input < random) {
    alert("Больше!");
  } else if (input == random) {
    alert("Правильно!");
    return input;
  } else {
    alert("Можно вводить только числа");
  }

  return game();
};
console.log(game());
