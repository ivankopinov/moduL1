"use strict";

const leapYears = (n, m) => {
  const yearArray = [];
  for (let i = n; i <= m; i++) {
    yearArray.push(i);
  }
  let result = [];

  yearArray.forEach(function (year) {
    if (getLeapYear(year)) result.push(year);
  });

  return result;
};

const getLeapYear = (year) => {
  if (
    (year % 4 === 0 && year % 100 !== 0) ||
    (year % 100 === 0 && year % 400 === 0)
  ) {
    return year;
  } else {
    return false;
  }
};

console.log(leapYears(2000, 2018));
