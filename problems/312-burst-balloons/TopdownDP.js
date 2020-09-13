/**
 * DP + 逆向思维
 * 
 * 时间：O(N^3)
 */
var maxCoins = function(nums) {
  const memo = new Map();
  const n = nums.length;

  // 状态定义：
  // 在开区间(left, right)内增加一个气球、最终能达到的最大分数
  function helper(left, right) {
    if (left + 1 >= right) return 0;
 
    const key = `${left}|${right}`;
    if (memo.has(key)) return memo.get(key);

    // 策略：可以在区间内任意一个位置增加
    let res = 0;
    for (let i = left + 1; i <= right - 1; ++i) {
      const curr = ((left >= 0 ? nums[left] : 1) * (right < n ? nums[right] : 1) * nums[i]) +
        helper(left, i) + helper(i, right);
      res = Math.max(res, curr);
    }
    memo.set(key, res);
    return memo.get(key);
  }

  return helper(-1, n);
};

module.exports = maxCoins;
