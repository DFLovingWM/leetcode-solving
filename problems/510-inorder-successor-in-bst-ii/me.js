/**
 * // Definition for a Node.
 * function Node(val,left,right,parent) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 *    this.parent = parent;
 * };
 */

/**
 * 先找右子树中最左边的，再找第一个往右走的父结点
 * 时间：O(N), 1992ms
 */
var inorderSuccessor = function(node) {
  let p, parent

  parent = node.right
  if (parent) p = parent.left
  while (p) {
    parent = p
    p = p.left
  }
  if (parent) return parent

  p = node
  parent = node.parent
  while (parent && parent.right === p) {
    p = parent
    parent = parent.parent
  }
  return parent
};