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

const sucStudents = allStudents.reduce((acc, item) => {
  if (!failedStudents.includes(item)) acc.push(item);
  return acc;
}, []);
console.log(sucStudents);
