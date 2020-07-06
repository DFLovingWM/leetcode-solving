/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
  let max = -Infinity, min = Infinity;
  let sum = 0;
  for (const n of salary) {
    max = Math.max(max, n);
    min = Math.min(min, n);
    sum += n;
  }
  return (sum - max - min) / (salary.length - 2);
};