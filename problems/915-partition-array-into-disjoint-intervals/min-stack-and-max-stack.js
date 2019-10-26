/**
 * 思路：
 * 只要保证：左边max <= 右边min
 * 为了在O(1)时间内获取min/max，对左边建立顺序最大栈，右边建立逆序最小栈
 * 
 * 时间：O(N), 104ms
 * 空间：O(N), 39.3MB
 */
var partitionDisjoint = function(nums) {
  // 建立顺序最大栈
  const maxStack = []
  let maxI = 0
  for (let i = 0; i < nums.length; ++i) {
    if (nums[i] > nums[maxI]) {
      maxI = i
    }
    maxStack.push(maxI)
  }
  
  // 建立逆序最小栈
  const minStack = []
  let minI = nums.length - 1
  for (let i = nums.length - 1; i >= 0; --i) {
    if (nums[i] < nums[minI]) {
      minI = i
    }
    minStack.push(minI)
  }
  minStack.reverse()

  let i = 1
  while (true) {
    let L = maxStack[i - 1]
    let R = minStack[i]
    if (nums[L] <= nums[R]) break
    i = R + 1
  }

  return i
};

[
  // [5,0,3,8,6],
  [1,1,1,0,6,12],
  // [32,57,24,19,0,24,49,67,87,87],
].forEach(arr => {
  console.log(partitionDisjoint(arr))
})