/**
 * 阅读理解
 */
var nearestValidPoint = function(x, y, points) {
  let res = -1;
  let d = Infinity;
  for (const [i, [a, b]] of points.entries()) {
    if (a === x || b === y) {
      const tmp = m([a, b], [x, y]);
      if (tmp < d) {
        d = tmp;
        res = i;
      }
    }
  }
  return res;
};

function m(A, B) {
  return Math.abs(A[0] - B[0]) + Math.abs(A[1] - B[1]);
}