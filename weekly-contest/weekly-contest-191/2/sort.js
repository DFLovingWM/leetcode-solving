/**
 * 找最大长、最大宽
 * 
 * 时间：O(NlogN), 204ms
 */
var maxArea = function(h, w, horizontalCuts, verticalCuts) {
  const maxW = maxDist(horizontalCuts, 0, h);
  const maxH = maxDist(verticalCuts, 0, w);
  return maxW * maxH % (1e9 + 7);
};

function maxDist(cuts, start, end) {
  cuts.push(start, end);
  cuts.sort((a, b) => a - b);
  let res = -Infinity;
  for (let i = 1; i < cuts.length; ++i) {
    res = Math.max(res, cuts[i] - cuts[i - 1]);
  }
  return res;
}