/**
 * 最短路径/最少步数问题 => BFS
 * 参考：https://leetcode.com/problems/jump-game-ii/discuss/18028/O(n)-BFS-solution
 * 
 * - Time: O(N), 64ms
 * - Space: O(1)
 */
var jump = function(arr) {
  if (arr.length === 1) return 0

  let level = 0
  let left = 0, right = 0
  let target = arr.length - 1

  let i = left
  while (true) {
    let nextRight = right
    for (i = left; i <= right; ++i) {
      nextRight = Math.max(nextRight, i + arr[i])
    }

    if (nextRight >= target) { // 如果下一批结点包含目标结点，则返回
      return level + 1
    } else if (nextRight === right) { // 如果无法再扩展，退出(但题目表示不会出现这种情况)
      return -1
    } else {
      [left, right, level] = [right + 1, nextRight, level + 1]
    }
  }
};

[
  [2,3,1,1,4]
].forEach(arr => {
  console.log(jump(arr))
})