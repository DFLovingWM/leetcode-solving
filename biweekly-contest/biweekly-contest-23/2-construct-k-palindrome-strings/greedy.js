/**
 * 贪心
 */
var canConstruct = function (s, k) {
  const n = s.length;
  const max = n;
  if (k > max) {
    return false;
  }

  // 频次
  const freq = new Map();
  for (const ch of s) {
    freq.set(ch, (freq.get(ch) || 0) + 1);
  }
  // 奇偶
  let odd = 0;
  for (const cnt of freq.values()) {
    if (cnt & 1) {
      ++odd;
    }
  }
  return k >= odd; // 需要理解好这个odd的意义
};