/**
 * DP（未优化）
 * 
 * 时间：O(N^4)
 * 空间：O(N^3)
 */
var removeBoxes = function(boxes) {
  const memo = new Map();

  // 状态定义：
  // 消除[left, right]（并且右边有`count`个数字与`boxes[right]`一样）的最大分数
  function helper(left, right, count) {
    if (left > right) return 0;

    const key = `${left}|${right}|${count}`;
    if (memo.has(key)) return memo.get(key);

    // 策略1（当下）：直接消除已有的连续
    let res = Math.pow(count + 1, 2) + // 消除
      helper(left, right - 1, 0); // 剩余的继续

    // 策略2（未来）：移除中间的、使右边的连续数更多
    for (let i = left; i < right; ++i) {
      // 如果与右边数字相等
      if (boxes[i] === boxes[right]) {
        const curr = helper(i + 1, right - 1, 0) + // 先消除[i+1, right-1]，使i、right挨在一起
          + helper(left, i, count + 1); // 再继续消除
        res = Math.max(res, curr);
      }
    }

    memo.set(key, res);
    return res;
  }

  return helper(0, boxes.length - 1, 0);
};

module.exports = removeBoxes;
