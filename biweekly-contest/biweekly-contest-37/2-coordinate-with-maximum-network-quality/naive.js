/**
 * @param {number[][]} towers
 * @param {number} radius
 * @return {number[]}
 */
var bestCoordinate = function(towers, radius) {
  let xm, ym;
  let maxSum = 0;
  for (let x = 0; x <= 50; ++x) {
    for (let y = 0; y <= 50; ++y) {
      let sum = 0;
      for (const [i, j, w] of towers) {
        const dist = Math.sqrt(Math.pow(i - x, 2) + Math.pow(j - y, 2));
        if (dist > radius) continue;
        sum += Math.floor(w / (1 + dist));
      }
      if (sum > maxSum) {
        maxSum = sum;
        xm = x;
        ym = y;
      }
    }
  }
  return [xm, ym];
};