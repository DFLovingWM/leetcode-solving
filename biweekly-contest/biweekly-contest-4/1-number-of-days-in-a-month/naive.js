/**
 * 闰年、二月
 * 
 * 时间：`O(1)`, 68ms
 */

const DAYS = [-1, 31, -1, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

function isLeapYear (year) {
  if (year % 100 === 0) {
    return year % 400 === 0
  } else {
    return year % 4 === 0
  }
}

var numberOfDays = function (year, month) {
  if (month !== 2) return DAYS[month]
  return isLeapYear(year) ? 29 : 28
};

[
  [1992, 7],
  [2000, 2],
  [1900, 2],
].forEach(input => {
  console.log(numberOfDays(...input))
})