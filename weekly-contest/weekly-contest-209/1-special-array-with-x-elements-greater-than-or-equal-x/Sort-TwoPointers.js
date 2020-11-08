/**
 * 排序 + （相对）双指针
 * 
 * 时间：O(NlogN)
 */
var specialArray = function(nums) {
  nums.sort((a, b) => b - a);

  const n = nums.length;
  let i = -1; // 满足的右闭边界
  for (let k = n; k >= 0; --k) { // 试探值。从最大开始
    // 扩展右边界
    while (i + 1 < n && nums[i + 1] >= k) {
      ++i;
    }
    // 检验答案
    if (i + 1 === k) return k;
    // 提前失败（k递减、i递增。一旦错过就不会再相遇）
    if (k < i) break;
  }
  return -1;
};
