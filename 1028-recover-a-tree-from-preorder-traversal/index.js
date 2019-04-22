/**
 * 时间复杂度：O(NlogN), 96ms
 */
var recoverFromPreorder = function(S) {
  const [arr, level] = parse(S)
  return helper(arr, level, 0, arr.length - 1)
};

/**
 * 递归函数：对于每一个递归单元：
 * 头元素就是root，然后根据dash的数量，确定左子树、右子树，以此递归
 * @param {number[]} arr 前序遍历的值
 * @param {number[]} level arr对应的层级
 * @param {number} left 左边界
 * @param {number} right 右边界（有效）
 * @returns {TreeNode} 本轮递归的局部根结点
 */
function helper (arr, level, left, right) {
  if (right - left + 1 === 0) return null // null结点

  let subRoot = new TreeNode(arr[left])
  if (left === right) { // leaf结点
    return subRoot
  }

  /**
   * 分割左右子树：找到层级为`level+1`的两个结点（需要注意边界）
   */
  let leftIndex = -1, rightIndex = -1
  for (let i = left; i <= right; ++i) {
    if (level[i] === level[left] + 1) {
      leftIndex = i
      break
    }
  }
  for (let i = leftIndex + 1; i <= right; ++i) {
    if (level[i] === level[left] + 1) {
      rightIndex = i
      break
    }
  }
  if (leftIndex !== -1 && rightIndex !== -1) { // 左右子树都有
    subRoot.left = helper(arr, level, leftIndex, rightIndex - 1)
    subRoot.right = helper(arr, level, rightIndex, right)
  } else if (leftIndex !== -1 && rightIndex === -1) { // 只有左子树
    subRoot.left = helper(arr, level, leftIndex, right)
  }

  return subRoot
}

/**
 * 处理字符串，转化为数组
 */
function parse (S) {
  let arr = []
  let level = []
  let regexp = /(-*)(\d+)/g
  while ((matchItem = regexp.exec(S)) !== null) {
    arr.push(Number(matchItem[2]))
    level.push(matchItem[1].length)
  }
  return [arr, level]
}
