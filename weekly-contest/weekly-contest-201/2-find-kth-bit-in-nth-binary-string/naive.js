/**
 * 暴力
 * 
 * 时间：O(2^N), 1892ms
 */
var findKthBit = function(n, k) {
  let s = '0';
  for (let i = 2; i <= n; ++i) {
    s = s + '1' + reverse(invert(s));
  }
  return s[k - 1];
};

function invert(s) {
  let res = '';
  for (const ch of s) {
    res += 1 - Number(ch);
  }
  return res;
}

function reverse(s) {
  let res = '';
  for (let i = s.length - 1; i >= 0; --i) {
    res += s[i];
  }
  return res;
}

[
  [3,1],
  [4,11],
  [1,1],
  [2,3],
].forEach(A => {
  console.log(findKthBit(...A))
})