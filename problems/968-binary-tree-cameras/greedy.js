/**
 * 贪心：为了最少：必须放才放，能不放就不放
 * 
 * 时间：`O(N)`, 88ms
 */

const STATE = {
  CAMERA: 1, // 放了监视器
  SPY: 2, // 没有监视器，但被监视
  NO_SPY: 3 // 没有监视器，也没被监视
}

var minCameraCover = function (root) {
  if (!root) return 0
  let res = 0
  
  // 后序遍历
  function dfs (node) {
    if (!node) return STATE.SPY

    const left = dfs(node.left)
    const right = dfs(node.right)

    if (left === STATE.NO_SPY || right === STATE.NO_SPY) { // 左或右没有被监视，则本结点一定要放一个
      ++res
      return STATE.CAMERA
    } else if (left === STATE.CAMERA || right === STATE.CAMERA) { // 左或右有监视器，本结点就不放了
      return STATE.SPY
    }
    return STATE.NO_SPY
  }

  const dummy = new TreeNode()
  dummy.left = root
  dfs(dummy)
  return Math.max(res, 1)
};

function TreeNode (val) {
  this.val = val
  this.left = this.right = null
}

module.exports = minCameraCover