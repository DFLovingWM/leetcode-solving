/**
 * // Definition for a Node.
 * function Node(val,next,random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * 递归法
 * 时间：696ms
 */
var copyRandomList = function (node, mapping = new WeakMap()) {
  if (!node) return node // NULL结点
  if (mapping.has(node)) return mapping.get(node) // 取缓存

  const newNode = new Node(node.val)

  // 先将该新结点记录到映射中：旧结点 => 新结点
  mapping.set(node, newNode)

  // 再处理值
  newNode.next = copyRandomList(node.next, mapping)
  newNode.random = copyRandomList(node.random, mapping)

  return newNode
};