/**
 * 暴力，一边连接一边算
 * 二进制数字也可以叠加
 * 
 * 时间：O(NlogN)
 */
var concatenatedBinary = function(n) {
  let res = 0;
  let arr = [0];
  const mod = 1e9 + 7;
  for (let i = 1; i <= n; ++i) {
    binaryAddOne(arr);
    for (const a of arr) {
      res = res * 2 + a;
      res %= mod;
    }
  }
  return res;
};

function binaryAddOne(arr) {
  let carry = 1;
  for (let i = arr.length - 1; i >= 0; --i) {
    const tmp = arr[i] + carry;
    arr[i] = tmp % 2;
    carry = (tmp >>> 1);
    if (!carry) break;
  }
  if (carry) {
    arr.unshift(1);
  }
}

concatenatedBinary(3);