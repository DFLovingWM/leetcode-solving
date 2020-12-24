/**
 * 滑动窗口
 */
var maximumUniqueSubarray = function(nums) {
  let left = 0;
  let res = 0; // 答案
  let sum = 0; // 窗口和
  const letter2Index = new Map(); // 窗口字符

  for (let right = 0; right < nums.length; ++right) {
    const newCh = nums[right];
    sum += newCh;
    if (letter2Index.has(newCh)) {
      const nextLeft = letter2Index.get(newCh);
      while (left <= nextLeft) {
        letter2Index.delete(nums[left]);
        sum -= nums[left];
        ++left;
      }
    }
    letter2Index.set(newCh, right);
    res = Math.max(res, sum);
  }

  return res;
};

// [
//   [4,2,4,5,6],
//   [5,2,1,2,5,2,1,2,5]
// ].forEach(A => {
//   console.log(maximumUniqueSubarray(A))
// })