/**
 * 数学
 * 
 * 时间：O(N^2), 64ms
 */
var numTeams = function(rating) {
  const n = rating.length;
  let res = 0;

  for (let i = 0; i < n; ++i) { // 关键（1）：遍历中间点
    // 看左边
    let leftSmaller = 0;
    let leftLarger = 0;
    for (let j = 0; j < i; ++j) {
      if (rating[j] < rating[i]) {
        ++leftSmaller;
      } else if (rating[j] > rating[i]) {
        ++leftLarger;
      }
    }

    // 看右边
    let rightSmaller = 0;
    let rightLarger = 0;
    for (let k = i + 1; k < n; ++k) {
      if (rating[k] > rating[i]) {
        ++rightLarger;
      } else if (rating[k] < rating[i]) {
        ++rightSmaller;
      }
    }

    // 关键（2）：计算组合数
    res += leftSmaller * rightLarger + leftLarger * rightSmaller;
  }

  return res;
};