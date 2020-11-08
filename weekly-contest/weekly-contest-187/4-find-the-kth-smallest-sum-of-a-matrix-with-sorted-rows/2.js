/**
 * 二分 + 回溯
 * 这样就能AC
 */
var kthSmallest = function(mat, k) {
  const [m, n] = [mat.length, mat[0].length];

  let [left, right] = [0, 0];
  for (let i = 0; i < m; ++i) {
    left += mat[i][0];
    right += mat[i][n - 1];
  }
  ++right;
  const minSum = left;

  // 求「<=targetSum」的数组个数
  function getCount(targetSum) {
    let res = 1;

    // 递归：逐行检查
    function backtrack(row, sum) {
      if (row === m) return;

      // 策略1：保持列不变
      backtrack(row + 1, sum);

      // 策略2：列指针向右移动
      for (let col = 1; col < n; ++col) {
        const nextSum = sum - mat[row][0] + mat[row][col];
        // 如果和比目标要大，由于右边的会更大，所以可以提前结束这一行
        if (nextSum > targetSum) break;
        ++res;
        // 个数已经达到k个，可以提前结束整个过程
        if (res >= k) return;
        backtrack(row + 1, nextSum);
      }
    }

    backtrack(0, minSum);
    return res;
  }

  while (left < right) {
    const mid = left + right >>> 1;
    const count = getCount(mid);
    if (count < k) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left;
};

module.exports = kthSmallest;
