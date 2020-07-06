/**
 * Top-down DP
 * 
 * 时间：O(N^3), 220ms
 * 空间：O(N^2)
 */
var maxUncrossedLines = function(A, B) {
  const memo = new Map();

  function f(i, j) {
    if (i === A.length || j === B.length) return 0;
    
    const key = `${i}|${j}`;
    if (memo.has(key)) return memo.get(key);

    // 策略1：不选
    let res = f(i + 1, j);

    // 策略2：选最近的
    for (; j < B.length && B[j] !== A[i]; ++j) ;
    const tmp = (j < B.length ? 1 : 0) + f(i + 1, j + 1);
    res = Math.max(res, tmp);

    memo.set(key, res);
    return res;
  }

  return f(0, 0);
};

[
  [[1,4,2], [1,2,4]],
  [[2,5,1,2,5], [10,5,2,1,5,2]],
  [[1,3,7,1,7,5], [1,9,2,5,1]],
].forEach(A => {
  console.log(maxUncrossedLines(...A));
});