/**
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * 记忆化搜索
 * 
 * 时间：O(N), 76ms
 * 空间：O(N), 35.4MB
 */
var copyRandomList = function (head) {
  const mapping = new Map();

  // 有点Top-down DP那味儿！（其实就是）
  function copy(node) {
    if (!node) return node; // 空结点
    if (mapping.has(node)) return mapping.get(node); // 取缓存

    const res = new Node();
    mapping.set(node, res); // 先放缓存
    res.val = node.val;
    res.next = copy(node.next); // 结点，要递归
    res.random = copy(node.random); // 结点，要递归
    return res;
  }

  return copy(head);
};