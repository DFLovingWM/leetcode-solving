/**
 * 暴力/枚举
 */
var maxDiff = function(num) {
  const s = String(num);
  let min = Infinity, max = -Infinity;
  for (let i = 0; i <= 9; ++i) {
    for (let j = 0; j <= 9; ++j) {
      const t = getNumber(s, i, j);
      if (t[0] !== '0' && Number(t) !== 0) {
        const n = Number(t);
        min = Math.min(min, n);
        max = Math.max(max, n);
      }
    }
  }
  return max - min;
};

// 将s中每个i字符换成j字符
function getNumber(s, i, j) {
  let res = '';
  for (const ch of s) {
    res += Number(ch) === i ? j : ch;
  }
  return res;
}

[
  555, 9, 123456, 10000, 9288
].forEach(a => {
  console.log(maxDiff(a))
})