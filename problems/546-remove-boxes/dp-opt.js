/**
 * DP，优化思路：
 * 预处理出所有相等的位置。
 * 这样给定一个值，就能直接找到所有与之相等的位置，省去了整个区间遍历。
 * 
 * 时间：O(N^4)
 * 空间：O(N^3)
 */
var removeBoxes = function(boxes) {
  // 预处理
  const n = boxes.length;
  // prev[i] = j，表示与`boxes[i]`相等的上一个位置在`j`
  const prev = Array.from({ length: n }, () => -1);
  for (let i = n - 1; i >= 0; --i) {
    for (let j = i - 1; j >= 0; --j) {
      if (boxes[j] === boxes[i]) {
        prev[i] = j;
        break;
      }
    }
  }

  // DP
  const dp = Array.from({ length: n }, () => (
    Array.from({ length: n }, () => (
      Array.from({ length: n }, () => -1)
    ))
  ));

  function helper(left, right, count) {
    if (left > right) return 0;
    if (dp[left][right][count] !== -1) return dp[left][right][count];

    // 策略1（当下）：直接消除已有的连续
    let res = Math.pow(count + 1, 2) + // 消除
      helper(left, right - 1, 0); // 剩余的继续

    // 策略2（未来）：移除中间的、使右边的连续数更多
    // 注意这里可以直接遍历所有与之相等的位置
    let i = prev[right];
    while (i >= left) {
      const curr = helper(i + 1, right - 1, 0) + // 先消除[i+1, right-1]，使i、right挨在一起
        + helper(left, i, count + 1); // 再继续消除
      res = Math.max(res, curr);
      i = prev[i];
    }

    return dp[left][right][count] = res;
  }

  return helper(0, boxes.length - 1, 0);
};

module.exports = removeBoxes;
