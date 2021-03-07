/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
  const f = new Map();
  for (const num of nums) {
    f.set(num, (f.get(num) || 0) + 1);
  }
  let res = 0;
  for (const [k, v] of f) {
    if (v === 1) {
      res += k;
    }
  }
  return res;
};