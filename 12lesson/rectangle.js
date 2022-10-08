"use strict";
const rectangle = {
  width: 5,
  height: 5,
  get rePerim() {
    return (
      "Периметр треугольника равен " + 2 * (this.width + this.height) + " см"
    );
  },
  set reWidth(val) {
    if (typeof val === 'number') {
      this.width = val;
    } else {
      this.width;
    }
  },
  set reHeight(val) {
    if (typeof val === 'number') {
      this.height = val;
    } else {
      this.height;
    }
  },
  get reSquare() {
    return "Площадь треугольника равна " + this.width * this.height + " см";
  },
};
console.log(rectangle);