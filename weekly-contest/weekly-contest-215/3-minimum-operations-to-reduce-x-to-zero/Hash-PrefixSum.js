/**
 * 转化：和为K的最长子数组(允许子数组长度为0)
 */
var minOperations = function(nums, x) {
  const sum = nums.reduce((acc, e) => acc + e, 0);
  const targetSum = sum - x;

  const first = new Map(); // 第一次出现key的位置为value
  let acc = 0; // 前缀和
  let res = -1; // 答案
  const n = nums.length;

  // 初始
  first.set(0, -1);
  if (targetSum === 0) {
    res = Math.max(res, 0);
  }

  // 迭代
  for (let i = 0; i < n; ++i) {
    acc += nums[i];
    const another = acc - targetSum;
    if (first.has(another)) {
      res = Math.max(res, i - first.get(another));
    } else {
      first.set(acc, i);
    }
  }

  return res === -1 ? -1 : n - res;
};

[
  [[1,1,4,2,3],5], // 2
  [[5,6,7,8,9],4], // -1
  [[3,2,20,1,1,3],10], // 5
  [[8828,9581,49,9818,9974,9869,9991,10000,10000,10000,9999,9993,9904,8819,1231,6309],134365], // 16
].forEach(A => {
  console.log(minOperations(...A))
})