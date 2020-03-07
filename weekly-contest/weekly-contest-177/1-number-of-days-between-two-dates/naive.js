/**
 * 选定基准
 */
var daysBetweenDates = function(date1, date2) {
  const A = date1.split('-').map(Number), B = date2.split('-').map(Number);
  return Math.abs(days(A) - days(B));
};

const MD = [-1, 31, -1, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// 1970-01-01
function days(date) {
  let [y, m, d] = date;
  let res = 0;
  
  // year
  for (let i = 1970; i < y; ++i) {
      if (isLeapYear(i)) {
          res += 366;
      } else {
          res += 365;
      }
  }
  // month
  for (let i = 1; i < m; ++i) {
      if (i === 2) {
          res += isLeapYear(y) ? 29 : 28;
      } else {
          res += MD[i];   
      }
  }
  // day
  res += d;
  
  return res;
}

function isLeapYear(y) {
  if (y % 100 === 0) return y % 400 === 0;
  return y % 4 === 0;
}