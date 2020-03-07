/**
 * 滑动窗口
 * 
 * 时间：O(N), 96ms
 * 空间：O(N), 38.2MB
 */
var lengthOfLongestSubstring = function (s) {
  const exist = new Set();
  let res = 0;
  let L = 0, R = 0;

  while (R < s.length) {
    const newChar = s[R++];

    // 保证窗口内不存在新字符
    while (exist.has(newChar)) {
      const oldChar = s[L++];
      exist.delete(oldChar);
    }

    exist.add(newChar);
    res = Math.max(res, R - L);
  }

  return res;
};