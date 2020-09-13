/**
 * 简单判断
 * 
 * 时间：O(1)
 */
var countOdds = function(low, high) {
  const d = high - low + 1;
  let res = Math.floor(d / 2);
  if (d % 2 === 0) {
    return res;
  }
  return res + low % 2;
};