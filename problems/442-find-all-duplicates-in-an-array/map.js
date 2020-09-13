/**
 * Map解法
 * 
 * 时间：O(N)
 * 空间：O(N)
 */
var findDuplicates = function(nums) {
  const freq = new Map();
  for (const num of nums) {
    freq.set(num, (freq.get(num) || 0) + 1);
  }

  const res = [];
  for (const [num, count] of freq) {
    if (count === 2) {
      res.push(num);
    }
  }
  return res;
};

module.export = findDuplicates;
