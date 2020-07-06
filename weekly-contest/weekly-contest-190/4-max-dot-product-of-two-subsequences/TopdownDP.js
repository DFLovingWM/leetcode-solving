/**
 * Top-down DP
 */
var maxDotProduct = function(A, B) {
  const memo = new Map();
  
  function helper(a, b) {
    if ()
    const key = `${a}|${b}`;
    if (memo.has(key)) return memo.get(key);

    let res = 0;
    // 策略1：选择A[a]
    
    // 策略2：选择B[b]

    // 策略3：都不选

    // 策略4：都选

    memo.set(key, res);
    return res;
  }

  return helper(0, 0);
};