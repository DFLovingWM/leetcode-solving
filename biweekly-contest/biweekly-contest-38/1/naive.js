/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
  const freq = new Map();
  for (const n of nums) {
    freq.set(n, (freq.get(n) || 0) + 1);
  }
  
  const map = new Map();
  for (const [num, count] of freq) {
    if (!map.has(count)) {
      map.set(count, []);
    }
    map.get(count).push(num);
  }

  const res = [];
  const counts = Array.from(map.keys()).sort((a, b) => a - b);
  for (const count of counts) {
    const nums = map.get(count);
    if (nums.length === 1) {
      for (let i = 0; i < count; ++i) {
        res.push(nums[0]);
      }
    } else {
      nums.sort((a, b) => b - a);
      for (const num of nums) {
        for (let i = 0; i < count; ++i) {
          res.push(num);
        }
      }
    }
  }
  return res;
};