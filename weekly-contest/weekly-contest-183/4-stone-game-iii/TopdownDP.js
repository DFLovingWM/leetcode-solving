/**
 * Top-down DP
 * 
 * 时间：O(N), 364ms
 */
var stoneGameIII = function(stones) {
  const n = stones.length;
  const memo = new Map();
  
  // 当前从`left`开始，最终Alice能获取的最大纯收益（Alice比Bob多出的数量）
  function helper(left) {
    if (left >= n) {
      return 0;
    }
    if (memo.has(left)) {
      return memo.get(left);
    }

    let res = -Infinity;
    let sum = 0;
    for (let x = 1; x <= 3 && left + x - 1 < n; ++x) { // x表示取最左边的多少个
      sum += stones[left + x - 1];
      const tmp = sum - helper(left + x);
      res = Math.max(res, tmp);
    }
    memo.set(left, res);
    return res;
  }

  const d = helper(0);
  return d === 0 ? 'Tie' : d > 0 ? 'Alice' : 'Bob';
};

module.exports = stoneGameIII;