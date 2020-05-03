/**
 * 滑动窗口：要拿走的k个都是两边的，所以维护滑动窗口表示中间/剩余区域
 * 
 * 时间：O(N), 112ms
 */
var maxScore = function(cardPoints, k) {
  const n = cardPoints.length;
  const w = n - k;
  const sum = cardPoints.reduce((a, b) => a + b, 0);
  let winSum = 0; // 窗口内所有数字之和
  let res = 0;
  for (let i = 0; i < n; ++i) {
    winSum += cardPoints[i];
    if (i - w >= 0) {
      winSum -= cardPoints[i - w];
    }
    if (i - w + 1 >= 0) {
      res = Math.max(res, sum - winSum);
    }
  }
  return res;
};

[
  [[1,2,3,4,5,6,1], 3],
  [[2,2,2], 2],
  [[9,7,7,9,7,7,9], 7],
  [[1,1000,1], 1],
  [[1,79,80,1,1,1,200,1], 3],
].forEach(A => {
  console.log(maxScore(...A));
});