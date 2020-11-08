/**
 * @param {number[][]} points
 * @return {number}
 */
var maxWidthOfVerticalArea = function(points) {
  const arr = points.map(p => p[0]).sort((a, b) => a - b);
  let res = 0;
  for (let i = 1; i < arr.length; ++i) {
    res = Math.max(res, arr[i] - arr[i - 1]);
  }
  return res;
};