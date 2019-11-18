// O(N)
var FindElements = function (root) {
  const set = new Set() // 记录有哪些值

  function recover (node, realVal) {
    if (!node) return
  
    node.val = realVal
    set.add(node.val)
    recover(node.left, realVal * 2 + 1)
    recover(node.right, realVal * 2 + 2)
  }

  recover(root, 0)
  this.set = set
};

// O(1)
FindElements.prototype.find = function (target) {
  return this.set.has(target)
};

module.exports = FindElements