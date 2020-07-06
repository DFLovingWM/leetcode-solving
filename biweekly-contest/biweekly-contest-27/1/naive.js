/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function(target, arr) {
  arr.sort((a, b) => a - b);
  target.sort((a, b) => a - b);
  return arr.every((n, i) => n === target[i]);
};