/**
 * 简单题，注意边界条件
 */
var lengthOfLastWord = function(s) {
  const words = s.split(' ').filter(Boolean);
  const n = words.length;
  if (n === 0) {
    return 0;
  }
  return words[n - 1].length;
};
