/**
 * 贪心
 * 难道是 KMP？
 */
var canChoose = function(groups, nums) {
  let a = 0;
  let b = 0;
  for (let i = 0; i < nums.length; ++i) {
    if (nums[i] === groups[a][b]) { // 相等
      ++b;
      if (b >= groups[a].length) {
        b = 0;
        ++a;
      }
    } else { // 不相等
      i -= b; // 效率有点低，考虑上 KMP
      b = 0;
    }

    if (a >= groups.length) {
      return true;
    }
  }
  return false;
};

[
  [
    [[21,22,21,22,21,30]],
    [21,22,21,22,21,22,21,30]
  ],
].forEach(A => {
  console.log(canChoose(...A))
})