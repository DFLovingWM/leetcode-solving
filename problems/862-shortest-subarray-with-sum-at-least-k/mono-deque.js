/**
 * 单调递增的deque
 * 
 * 时间：O(N), 176ms
 * 空间：O(N)
 */
var shortestSubarray = function(A, K) {
  const n = A.length;
  const P = Array.from({ length: n + 1 }, () => 0); // 前缀和
  for (let i = 0; i < n; ++i) {
    P[i + 1] = P[i] + A[i];
  }

  let res = Infinity;
  const D = [];

  for (let i = 0; i <= n; ++i) {
    // 作为减数，淘汰deque中更差的减数，同时维护单调递增性
    // （对于减数来说，下标更大、值却更小，则更优秀）
    while (D.length > 0 && P[D[D.length - 1]] >= P[i]) {
      D.pop();
    }
    // 寻找最优解/最短子数组：作为被减数，使用并丢弃满足K的减数
    // （之后被减数的值更大、下标也更大，这些减数没用了，对答案没影响）
    while (D.length > 0 && P[i] - P[D[0]] >= K) {
      res = Math.min(res, i - D[0]);
      D.shift();
    }
    // 加入队列
    D.push(i);
  }

  return res === Infinity ? -1 : res;
};

module.exports = shortestSubarray;