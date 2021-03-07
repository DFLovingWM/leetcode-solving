/**
 * Map
 */
var tupleSameProduct = function(nums) {
  const freq = new Map();
  const n = nums.length;
  for (let i = 0; i < n; ++i) {
    for (let j = i + 1; j < n; ++j) {
      const p = nums[i] * nums[j];
      freq.set(p, (freq.get(p) || 0) + 1);
    }
  }
  
  let res = 0;
  for (const v of freq.values()) {
    res += v * (v - 1) / 2 * 8; // 8
  }
  return res;
};

/**
 * [2,3,4,6]
 * 
 * 6:1
 * 8:1
 * 12:2
 * 18:1
 * 24:1
 */