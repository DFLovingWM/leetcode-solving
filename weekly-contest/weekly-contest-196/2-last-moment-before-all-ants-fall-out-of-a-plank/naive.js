/**
 * 相当于不转向，
 * 所以只需要求离边缘的最大距离
 */
var getLastMoment = function(n, left, right) {
  let res = 0;
  for (const i of left) {
    res = Math.max(res, i);
  }
  for (const i of right) {
    res = Math.max(res, n - i);
  }
  return res;
};