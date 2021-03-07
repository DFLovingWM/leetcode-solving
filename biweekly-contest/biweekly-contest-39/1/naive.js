/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function(code, k) {
  const n = code.length;
  const res = Array.from({ length: n }, () => 0);

  if (k === 0) {
    return res;
  }

  if (k > 0) {
    for (let i = 0; i < n; ++i) {
      let sum = 0;
      for (let j = i + 1; j <= i + k; ++j) {
        sum += code[j % n];
      }
      res[i] = sum;
    }
  } else {
    for (let i = 0; i < n; ++i) {
      let sum = 0;
      for (let j = i - 1; j >= i + k; --j) {
        sum += code[(j + n) % n];
      }
      res[i] = sum;
    }
  }
  return res;
};