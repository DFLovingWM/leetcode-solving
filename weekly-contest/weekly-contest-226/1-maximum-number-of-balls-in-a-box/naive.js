/**
 * 顺序遍历即可
 * 时间：O(N)
 */
var countBalls = function(lowLimit, highLimit) {
  const f = new Map();
  for (let i = lowLimit; i <= highLimit; ++i) {
    let acc = 0;
    for (let j = i; j > 0; j = Math.floor(j / 10)) {
      acc += j % 10;
    }
    f.set(acc, (f.get(acc) || 0) + 1);
  }
  return Math.max(...f.values());
};