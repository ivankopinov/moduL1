"use strict";
const rectangle = {
  width: 5,
  height: 5,
  get rePerim() {
    return (
      "Перимент треугольника равен " + 2 * (this.width + this.height) + " см"
    );
  },
  set reWidth(val) {
    this.width = val;
    if (val === !Number.isFinite) {
      return console.log("Введите число");
    }
  },
  set reHeight(val) {
    this.height = val;
    if (val === !Number.isFinite) {
      return console.log("Введите число");
    }
  },
  get reSquare() {
    return "Площадь треугольника равна " + this.width * this.height + " см";
  },
};
console.log(rectangle);

