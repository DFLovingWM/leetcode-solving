/**
 * 暴力，一边连接一边算
 * 
 * 时间：O(NlogN)
 */
var concatenatedBinary = function(n) {
  let res = 0;
  const mod = 1e9 + 7;
  for (let i = 1; i <= n; ++i) {
    const arr = getBinary(i);
    for (const a of arr) {
      res = res * 2 + a;
      res %= mod;
    }
  }
  return res;
};

// O(logX)
function getBinary(x) {
  let res = [];
  for (; x; x >>>= 1) {
    if (x & 1) {
      res.push(1);
    } else {
      res.push(0);
    }
  }
  return res.reverse();
}
