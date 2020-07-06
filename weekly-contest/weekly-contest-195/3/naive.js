/**
 * 排序 + 双指针
 */
var numSubseq = function(nums, target) {
  nums.sort((a, b) => a - b);
  let i = 0;
  let j = nums.length - 1;
  let res = 0;
  const MOD = 1e9 + 7;
  while (i <= j) {
    if (nums[i] + nums[j] <= target) { // 满足，可以扩大
      res += mi(2, j - i, MOD);
      res %= MOD;
      ++i;
    } else { // 过大，需要缩小
      --j;
    }
  }
  return res;
};

// 需要快速幂？
function mi(x, n, mod) {
  let res = 1;
  for (; n > 0; --n) {
    res *= x;
    res %= mod;
  }
  return res;
}

[
  [[3,5,6,7], 9],
  [[3,3,6,8], 10],
  [[2,3,3,4,6,7], 12],
  [[5,2,4,1,7,6,8], 16],
].forEach(A => {
  console.log(numSubseq(...A))
})