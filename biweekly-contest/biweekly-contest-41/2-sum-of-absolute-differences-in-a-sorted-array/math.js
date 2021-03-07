/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSumAbsoluteDifferences = function(nums) {
  const d = [];
  const n = nums.length;
  for (let i = 1; i < n; ++i) {
    d.push(nums[i] - nums[i - 1]);
  }

  let sum = 0;
  for (let i = 0; i < n - 1; ++i) {
    sum += d[i] * (n - 1 - i);
  }

  const res = Array.from({ length: n }, () => 0);
  res[0] = sum;
  for (let i = 1; i < n; ++i) {
    res[i] = res[i - 1] - (n - i) * d[i - 1] + i * d[i - 1];
  }
  return res;
};

[
  [2,3,5],
  [1,4,6,8,10],
].forEach(A => {
  console.log(getSumAbsoluteDifferences(A))
})