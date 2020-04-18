/**
 * DP
 */
var minJump = function(jump) {
  const n = jump.length;

  // max[i]表示前缀范围`0~i`能跳到的最远距离
  const max = Array.from({ length: n }, () => -1);
  max[0] = jump[0];
  for (let i = 1; i < n; ++i) {
    max[i] = Math.max(i + jump[i], max[i - 1]);
  }

  const memo = Array.from({ length: n }, () => -1);

  function helper(i) {
    if (i >= n) return 0;
    if (memo[i] !== -1) return memo[i];

    // 往右
    const r = i + jump[i];
    let res = 1 + helper(r);
    // 往左
    if (i - 1 >= 0) {
      const l = max[i - 1];
      res = Math.min(res, 2 + helper(l));
    }
    return memo[i] = res;
  }

  return helper(0);
};

[
  [2, 5, 1, 1, 1, 1],
].forEach(A => {
  console.log(minJump(A))
})