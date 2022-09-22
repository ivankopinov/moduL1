let input, number, random = Math.floor(Math.random() * 100);
 
while ((input = prompt("Я загадал число от 0 до 100. Попробуй отгадай!:)")) !== null) {
    if ((number = +input) !== parseFloat(input) || !Number.isFinite(number))
        alert("Введи число!");
    else if (number > random)
        alert("Меньше!");
    else if (number < random)
        alert("Больше!");
    else if (number == random) {
        alert("Правильно!");
        break;
    }
}