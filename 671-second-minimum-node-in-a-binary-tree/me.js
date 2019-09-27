const NOT_EXIST = -1 // 不存在

/**
 * 递归：寻找第二小 <=> 寻找以root为根的子树中，除了root之外的最小值
 * 
 * 时间：O(N), 64ms
 */
var findSecondMinimumValue = function(root) {
  if (!root.left) return NOT_EXIST // 没有子结点，则该子树不存在第二小

  const min = root.val
  let [left, right] = [root.left.val, root.right.val]

  if (left === min) {
    // 如果左结点与根相等即不是第二小，则递归寻找左子树
    left = findSecondMinimumValue(root.left)
  }
  if (right === min) {
    // 同理，如果右结点与根相等即不是第二小，则递归寻找右子树
    right = findSecondMinimumValue(root.right)
  }
  
  return left === NOT_EXIST ? right : right === NOT_EXIST ? left : Math.min(left, right) // 取合法值中的更小者
};
