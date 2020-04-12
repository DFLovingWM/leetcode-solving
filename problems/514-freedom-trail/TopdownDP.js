/**
 * Top-down DP
 * 
 * 时间：O(R^2 * K) ~= O(100^3), 116ms
 * 空间：O(RK)
 */
var findRotateSteps = function (ring, key) {
  const R = ring.length;
  const K = key.length;
  const memo = new Map();

  // 当前在ring[r]、key[k]，最终达到的最小步数
  function helper(r, k) {
    if (k >= K) return 0;

    const id = `${r}#${k}`;
    if (memo.has(id)) return memo.get(id);

    let res = Infinity;
    for (let i = 0; i < R; ++i) {
      if (ring[i] === key[k]) { // 遍历所有与key[k]相等的位置（都尝试一下）
        const step1 = Math.abs(i - r); // 某个方向
        const step2 = R - step1; // 另一个方向
        const tmp = Math.min(step1, step2) + 1 + helper(i, k + 1);
        res = Math.min(res, tmp); // 最终取最小代价
      }
    }
    memo.set(id, res);
    return res;
  }

  return helper(0, 0);
};

module.exports = findRotateSteps;