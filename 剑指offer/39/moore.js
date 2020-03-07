/**
 * 摩尔投票法
 * 
 * 时间：O(N)
 * 空间：O(1)
 */
var majorityElement = function (nums) {
  let num = Infinity, score = 1;
  for (const n of nums) {
    if (n !== num) {
      --score;
      if (score === 0) { // 换
        num = n;
        score = 1;
      }
    } else {
      ++score;
    }
  }
  return num;
};