/**
 * 数学
 * 
 * 时间：O(N), 72ms
 */
var reachNumber = function(target) {
  // 正负一样，所以转成正数来算
  target = Math.abs(target);

  let sum = 0;
  let i = 0;
  while (sum < target) {
    ++i;
    sum += i;
  }

  // 刚好达到
  if (sum === target) return i;
  // 凑到偶数
  while (sum - target & 1) {
    ++i;
    sum += i;
  }
  return i;
};

[
  -2,
  10000,
].forEach(n => {
  console.log(reachNumber(n))
})