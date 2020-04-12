/**
 * minMax问题
 * 
 * 时间：O(N^2), 468ms
 * 空间：O(N^2), 43.8MB
 */
var getMoneyAmount = function (n) {
  const memo = new Map();

  function helper(left, right) {
    if (left >= right) return 0;
    
    const key = `${left},${right}`;
    if (memo.has(key)) return memo.get(key);

    let res = Infinity;
    for (let i = left; i <= right; ++i) {
      // 极大值
      const tmp = i + Math.max(
        helper(left, i - 1),
        helper(i + 1, right)
      );
      res = Math.min(res, tmp); // 极小化
    }
    memo.set(key, res);
    return res;
  }

  return helper(1, n);
};

module.exports = getMoneyAmount;