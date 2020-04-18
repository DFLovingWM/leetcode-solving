/**
 * 暴力
 */
var minStartValue = function(nums) {
  let res = 1;
  let sum = 0;
  for (const num of nums) {
    sum += num;
    const tmp = 1 - sum;
    res = Math.max(res, tmp);
  }
  return res;
};

[
  [-3,2,-3,4,2],
  [1,2],
  [1,-2,-3],
].forEach(A => {
  console.log(minStartValue(A))
})