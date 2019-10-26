/**
 * 是否可达 => （小题大做）最短路径/最少步数问题 => BFS
 * [45](https://leetcode.com/problems/jump-game-ii/)的简化版
 * 参考：https://leetcode.com/problems/jump-game-ii/discuss/18028/O(n)-BFS-solution
 * 
 * - Time: O(N), 64ms
 * - Space: O(1)
 */
var canJump = function(arr) {
  if (arr.length === 1) return true

  let left = 0, right = 0
  let target = arr.length - 1

  let i = left
  while (true) {
    let nextRight = right
    for (i = left; i <= right; ++i) {
      nextRight = Math.max(nextRight, i + arr[i])
    }

    if (nextRight >= target) { // 如果下一批结点包含目标结点，则返回
      return true
    } else if (nextRight === right) { // 如果无法再扩展，退出
      return false
    } else {
      [left, right] = [right + 1, nextRight]
    }
  }
};

[
  [2,3,1,1,4]
].forEach(arr => {
  console.log(canJump(arr))
})