/**
 * Morris化为有序单链表，再化为循环双向链表
 * 
 * 时间：720ms
 * 空间：85.6MB
 */
var treeToDoublyList = function(root) {
  if (!root) return null

  let prev = null // （线性结构的）上一个结点
  let curr = root // 当前结点
  let head = null // 新链表的头部

  // Morris化为单链表
  while (curr) {
    if (curr.left) { // 如果有左结点
      let rightmost = curr.left

      if (prev) {
        // 如果prev存在，将prev.right指向左子树的根
        // 解决两个指针的right同时指向同一个结点的问题
        prev.right = rightmost
      }

      while (rightmost.right) {
        rightmost = rightmost.right
      }
      rightmost.right = curr
      let next = curr.left
      curr.left = null
      curr = next
    } else { // 如果不存在左结点
      if (!head) {
        head = curr
      }
      [prev, curr] = [curr, curr.right]
    }
  }

  // 给每个结点添加left，指向前驱结点
  prev = head
  curr = prev.right
  while (curr) {
    curr.left = prev;
    [prev, curr] = [curr, curr.right]
  }

  // 处理头尾结点，表示循环
  prev.right = head // 此时prev为尾元素
  head.left = prev

  // 返回头元素
  return head
};