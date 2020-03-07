/**
 * 栈
 * 
 * 时间：O(N), 56ms
 * 空间：O(N), 35.3MB
 */
var reverseList = function (head) {
  const stack = [];
  for (let p = head; p; p = p.next) {
    stack.push(p);
  }

  const dummy = new TreeNode();
  dummy.next = null;
  let p = dummy;
  while (stack.length > 0) {
    const node = stack.pop();
    node.next = null;
    p.next = node;
    p = p.next;
  }
  return dummy.next;
};