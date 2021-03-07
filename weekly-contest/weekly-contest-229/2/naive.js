/**
 * 暴力即可
 */
var minOperations = function(boxes) {
  const res = [];
  const n = boxes.length;
  for (let i = 0; i < n; ++i) {
    let tmp = 0;
    for (let j = 0; j < n; ++j) {
      if (boxes[j] === '1') {
        tmp += Math.abs(i - j);
      }
    }
    res.push(tmp);
  }
  return res;
};