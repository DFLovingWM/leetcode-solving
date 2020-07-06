/**
 * Top-down DP
 * 
 * 时间：O(KN^3), 196ms
 * 空间：O(KN)
 */
var minDistance = function(houses, k) {
  houses.sort((a, b) => a - b); // 先排序

  const memo = new Map();
  const n = houses.length;

  // 以[left ~ right]为一堆，返回其代价
  function distSum(left, right) {
    const mid = Math.floor((left + right) / 2);
    let res = 0;
    for (let i = left; i <= right; ++i) {
      res += Math.abs(houses[i] - houses[mid]);
    }
    return res;
  }

  // 递归函数：当前在第`i`个，已有`p`堆
  function helper(i, p) {
    if (i === n && p === k) return 0;
    if (i === n || p === k) return Infinity;

    const key = `${i}|${p}`;
    if (memo.has(key)) return memo.get(key);

    // 策略：以多少个房子为一堆，取代价最小
    let res = Infinity;
    for (let j = i; j < n; ++j) {
      const curr = distSum(i, j) + helper(j + 1, p + 1);
      res = Math.min(res, curr);
    }
    memo.set(key, res);
    return res;
  }

  return helper(0, 0);
};

[
  [[1,4,8,10,20], 3],
  [[2,3,5,12,18], 2],
  [[7,4,6,1], 1],
  [[3,6,14,10], 4],
  [[1,8,12,10,3], 3],
].forEach(A => {
  console.log(minDistance(...A))
})