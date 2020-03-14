/**
 * 数学、分类讨论
 */
var generateTheString = function(n) {
  let res = '';
  if (n & 1) { // 奇，直接输出就好
    res = 'a'.repeat(n);
  } else { // 偶 = 奇 + 奇
    res = 'a' + 'b'.repeat(n - 1);
  }
  return res;
};