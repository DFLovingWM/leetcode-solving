/**
 * 1. 暴力枚举: O(N^2)
 * 2. 子串构造时，可以用「有序表」维护max/min（注意无法用堆）：O(logM)
 *    当然因为范围只是26，每次排序也是可以的：O(MlogM)
 */
var beautySum = function(s) {
  const n = s.length;
  let res = 0;
  for (let i = 0; i < n; ++i) {
    const freq = Array.from({ length: 26 }, () => 0);
    for (let j = i; j < n; ++j) {
      ++freq[char2Index(s[j])];
      res += getValue(freq);
    }
  }
  return res;
};

function char2Index(ch) {
  return ch.charCodeAt(0) - 'a'.charCodeAt(0);
}

function getValue(freq) {
  const arr = freq.filter(e => e !== 0).sort((a, b) => b - a);
  if (arr.length < 2) {
    return 0;
  }
  return arr[0] - arr[arr.length - 1];
}

