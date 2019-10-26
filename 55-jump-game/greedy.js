/**
 * 贪心：逆序扫描，维护当前可达的最小位置
 */
function canJump (nums) {
  const n = nums.length
  let nearest = n - 1 // 初始值：终点（必定可达）

  for (let i = n - 2; i >= 0; --i) {
    if (i + nums[i] >= nearest) {
      nearest = i
    }
  }
  return nearest === 0
}

module.exports = canJump