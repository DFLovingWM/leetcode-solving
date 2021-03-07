/**
 * 类似于「字符串比较」
 */
var compareVersion = function(version1, version2) {
  const A = version1.split('.');
  const B = version2.split('.');
  for (let i = 0, n = Math.max(A.length, B.length); i < n; ++i) {
    // 技巧：
    // 1. Number转化，可以消除前导0
    // 2. 不存在时，相当于0
    const a = Number(A[i]) || 0;
    const b = Number(B[i]) || 0;
    if (a === b) {
      continue;
    }
    return a > b ? 1 : -1;
  }
  return 0;
};

[
  ["1.01", "1.001"],
  ["1.0", "1.0.0"],
  ["0.1", "1.1"],
  ["1.0.1", "1"],
  ["7.5.2.4", "7.5.3"],
].forEach(A => {
  console.log(compareVersion(...A))
})