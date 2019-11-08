/**
 * 二叉树的前序遍历（@todo 待DEBUG）
 */
let dummy, p

var flatten = function (head) {
  dummy = new Node()
  p = dummy
  preOrder(head)
  return dummy.next
};

function preOrder (node) {
  if (!node) return

  p = addNode(p, node.val)
  preOrder(node.child)
  preOrder(node.next)
}

function addNode (p, val) {
  const newNode = new Node(val)
  newNode.prev = p
  p.next = newNode
  return newNode
}