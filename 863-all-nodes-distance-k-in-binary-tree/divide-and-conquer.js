/**
 * 分治
 * 参考[采用分治的思想把复杂问题简单化](https://leetcode-cn.com/problems/all-nodes-distance-k-in-binary-tree/solution/cai-yong-fen-zhi-de-si-xiang-ba-fu-za-wen-ti-jian-/)
 * 
 * 时间：60ms
 */
let res // 保存结果

var distanceK = function (root, target, K) {
  res = []
  dfs(root, target, K)
  return res
};

// 寻找`node`以下距离为K的所有结点
function getKFromRoot (node, K) {
  if (!node) return
  if (K === 0) {
    res.push(node.val)
    return
  }
  getKFromRoot(node.left, K - 1)
  getKFromRoot(node.right, K - 1)
}

// 遍历树
// 返回值的意义：负数表示无目标；0表示该结点是答案；正数K表示需要从当前结点出发往下找K距离的结点作为答案
function dfs (node, target, K) {
  if (!node) return

  // 遇到目标结点
  if (node.val === target.val) {
    getKFromRoot(target, K) // 往下找
    return K - 1 // 往上找
  }

  const left = dfs(node.left, target, K)
  if (left >= 0) {
    if (left === 0) {
      getKFromRoot(node, 0)
    } else {
      getKFromRoot(node.right, left - 1)
    }
    return left - 1
  }
  
  const right = dfs(node.right, target, K)
  if (right >= 0) {
    if (right === 0) {
      getKFromRoot(node, 0)
    } else {
      getKFromRoot(node.left, right - 1)
    }
    return right - 1
  }

  return -1
}

module.exports = distanceK