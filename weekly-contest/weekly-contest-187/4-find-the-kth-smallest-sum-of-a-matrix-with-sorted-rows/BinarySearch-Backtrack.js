/**
 * 二分 + 回溯
 * 参考：https://leetcode-cn.com/problems/find-the-kth-smallest-sum-of-a-matrix-with-sorted-rows/solution/er-fen-by-newbie-19-3/
 * 
 * 时间：84ms
 */
var kthSmallest = function(mat, K) {
  const [m, n] = [mat.length, mat[0].length];
  let [left, right] = [0, 0];
  for (let i = 0; i < m; ++i) {
    left += mat[i][0];
    right += mat[i][n - 1];
  }

  let result; // 记录DFS的结果（小于等于mid的个数）

  /**
   * DFS：求小于等于targetSum的数字有多少个
   * @param {number} targetSum 要检测的和
   * @param {number} r 当前行
   * @param {number} sum 当前和
   */
  function backtrack(targetSum, r, sum) {
    // 剪枝：个数已经超过K了，不必再继续了
    if (result >= K) return;
    // 递归终止条件
    if (r === m) return;

    // 策略1：该行不变，即保持mat[r][0]
    backtrack(targetSum, r + 1, sum);
    // 策略2：遍历该行的每一列，即mat[r][1 ～ (n-1)]
    for (let c = 1; c < n; ++c) {
      const s = sum - mat[r][0] + mat[r][c];
      // 已经超过targetSum了，则该r行之后的也不需要看了(只会更大)
      if (s > targetSum) {
        break;
      }
      ++result;
      backtrack(targetSum, r + 1, s);
    }
  }

  // 二分查找
  const firstCol = left;
  while (left < right) {
    const mid = left + (right - left >>> 1);
    result = 1;
    backtrack(mid, 0, firstCol);
    if (result >= K) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
};

module.exports = kthSmallest;