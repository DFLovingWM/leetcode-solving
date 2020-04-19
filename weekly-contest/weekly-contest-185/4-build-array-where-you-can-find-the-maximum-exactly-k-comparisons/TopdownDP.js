/**
 * Top-down DP
 * 
 * 时间：O(N * K * M^2)
 */
var numOfArrays = function(N, M, K) {
  const MOD = 1e9 + 7;
  const memo = new Map();

  // 每次放1个数字
  function helper(i, max, k) {
    if (i === N) {
      if (k === K) return 1;
      return 0;
    }

    const key = `${i},${max},${k}`;
    if (memo.has(key)) return memo.get(key);

    let res = 0;
    for (let num = 1; num <= M; ++num) { // 尝试所有数字
      if (num <= max) {
        res += helper(i + 1, max, k);
      } else {
        res += helper(i + 1, num, k + 1);
      }
      res %= MOD;
    }
    memo.set(key, res);
    return res;
  }

  return helper(0, -1, 0);
};

[
  [2,3,1],
  [5,2,3],
  [9,1,1],
  [50,100,25],
  [31,17,7], // 该测试用例，官方给的是错误的答案
].forEach(A => {
  console.log(numOfArrays(...A))
})