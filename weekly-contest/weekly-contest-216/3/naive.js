/**
 * 预处理/累积数组/小DP
 * （下标细节的处理略繁琐）
 */
var waysToMakeFair = function(nums) {
  const n = nums.length;
  if (n === 1) return 1;

  // 预处理（从右边开始）
  const rightOddSum = Array.from({ length: n + 2 }, () => 0);
  const rightEvenSum = Array.from({ length: n + 2 }, () => 0);
  for (let i = n - 2; i >= 0; --i) {
    if (i & 1) {
      rightOddSum[i] = rightOddSum[i + 1];
      rightEvenSum[i] = rightEvenSum[i + 1] + nums[i + 1];
    } else {
      rightEvenSum[i] = rightEvenSum[i + 1];
      rightOddSum[i] = rightOddSum[i + 1] + nums[i + 1];
    }
  }

  // 找答案（从左边开始）
  let res = 0;
  let [leftOdd, leftEven] = [0, 0];
  for (let i = 0; i < n; ++i) {
    const odd = leftOdd + rightEvenSum[i];
    const even = leftEven + rightOddSum[i];
    if (odd === even) {
      ++res;
    }

    if (i & 1) {
      leftOdd += nums[i];
    } else {
      leftEven += nums[i];
    }
  }
  return res;
};

[
  [2,1,6,4],
  [1,1,1],
  [1,2,3],
  [1,1,1,1,1],
].forEach(A => {
  console.log(waysToMakeFair(A))
})