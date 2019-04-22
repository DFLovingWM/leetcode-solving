/**
 * 从后往前，耗时一样
 * 
 * Bottom-up DP
 */
var canJump = function(nums) {
  const { length } = nums
  let canReach = Array.from({ length }, () => false)

  // 从终点开始
  canReach[length - 1] = true
  for (let i = length - 2; i >= 0; --i) {
    let [start, end] = [i + 1, Math.min(i + nums[i], length - 1)]
    // 只要后面的任意1个位置可达，那此位置也可达(可以直接break了)
    canReach[i] = canReach.slice(start, end + 1).some(c => c)
  }

  return canReach[0]
};

[
  [2,3,1,1,4],
  [3,2,1,0,4],
].forEach(arr => {
  console.log(canJump(arr))
})