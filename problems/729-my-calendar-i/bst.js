/**
 * 时间：O(NlogN)
 * 空间：O(N)
 */
var MyCalendar = function() {
  this.root = null
};

MyCalendar.prototype.book = function(start, end) {
  if (!this.root) {
    this.root = new BSTNode(start, end)
    return true
  }
  return insert(this.root, start, end)
};

// 二叉搜索树结点
function BSTNode (start, end) {
  this.start = start
  this.end = end
  this.left = null
  this.right = null
}

// 插入结点（与业务耦合，但够简便）
function insert (node, newStart, newEnd) {
  if (newStart >= node.end) { // 合法情况1，走右边
    if (!node.right) {
      node.right = new BSTNode(newStart, newEnd)
      return true
    } else {
      return insert(node.right, newStart, newEnd)
    }
  } else if (newEnd <= node.start) { // 合法情况2，走左边
    if (!node.left) {
      node.left = new BSTNode(newStart, newEnd)
      return true
    } else {
      return insert(node.left, newStart, newEnd)
    }
  } else { // 不合法情况，返回false
    return false
  }
}

module.exports = MyCalendar