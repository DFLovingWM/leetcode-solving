/**
 * 【最优解法】
 * 贪心：令 2^20-1 作为和，就能直接求出答案
 * 考察 XOR 的顺/逆运算
 * 
 * 时间：O(N), 288ms
 */
 var getMaximumXor = function(nums, maximumBit) {
  let sum = nums.reduce((acc, e) => acc ^ e, 0);
  const target = (1 << maximumBit) - 1;
  const res = [];
  for (let i = nums.length - 1; i >= 0; --i) {
    res.push(target ^ sum); // 重点
    sum ^= nums[i];
  }
  return res;
};
