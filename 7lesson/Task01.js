"use strict";

const allStudents = [
  "Иванов",
  "Петров",
  "Сидоров",
  "Кузнецов",
  "Смирнов",
  "Попов",
  "Соколов",
];
const failedStudents = ["Смирнов", "Сидоров", "Попов"];
let sucStudents = allStudents.filter((x) => !failedStudents.includes(x));

console.log(sucStudents);
