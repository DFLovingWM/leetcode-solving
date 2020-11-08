/**
 * 二分 + 回溯
 * 总会超时。。？
 */
var kthSmallest = function(mat, k) {
  const [m, n] = [mat.length, mat[0].length];

  let [left, right] = [0, 0];
  for (let i = 0; i < m; ++i) {
    left += mat[i][0];
    right += mat[i][n - 1];
  }
  ++right;

  while (left < right) {
    const mid = left + right >>> 1;
    const count = getCount(mat, mid, k);
    if (count < k) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left;
};

// 求「<=targetSum」的数组个数
function getCount(mat, targetSum, k) {
  const [m, n] = [mat.length, mat[0].length];
  let res = 0;

  // 每行挑一个数字
  function backtrack(currRow, currSum) {
    // 「叶子」完成一个数组，判断
    if (currRow === m) {
      if (currSum <= targetSum) ++res;
      return;
    }
    // 「非叶子」一般情况
    for (let col = 0; col < n; ++col) {
      const nextSum = currSum + mat[currRow][col];
      // backtrack(currRow + 1, nextSum);
      // 「剪枝」个数已经超过k，整体可终止
      if (res >= k) return;
      // 「剪枝」当前和已经大于目标了，之后只会更大，整体可终止
      if (currSum > targetSum) return;
      backtrack(currRow + 1, nextSum);
    }
  }

  backtrack(0, 0);
  return res;
}

module.exports = kthSmallest;
