/**
 * 前缀积 + 哈希
 */
var getMaxLen = function(nums) {
  let res = 0;
  let product = 1;
  const prev = new Map();
  prev.set(1, -1);

  for (let i = 0; i < nums.length; ++i) {
    if (nums[i] === 0) { // 0则重置
      prev.clear();
      prev.set(1, i);
      product = 1;
      continue;
    }
    const num = nums[i] / Math.abs(nums[i]);
    product *= num;
    if (prev.has(product)) { // 正正得正、负负得正
      res = Math.max(res, i - prev.get(product));
    } else {
      prev.set(product, i);
    }
  }

  return res;
};

module.exports = getMaxLen;

/**
[1,-2,-3,4]
[0,1,-2,-3,-4]
[-1,-2,-3,0,1]
[-1,2]
[1,2,3,5,-6,4,0,10]
 */