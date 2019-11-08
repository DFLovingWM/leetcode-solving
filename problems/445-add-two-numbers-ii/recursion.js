/**
 * 递归解法
 */
var addTwoNumbers = function (l1, l2) {
  // 通过在短链表前面补0，使两个链表等长
  const [n1, n2] = [getLength(l1), getLength(l2)]
  if (n1 > n2) {
    for (let i = n1 - n2 - 1; i >= 0; --i) {
      l2 = addAtHead(l2, 0)
    }
  } else if (n1 < n2) {
    for (let i = n2 - n1 - 1; i >= 0; --i) {
      l1 = addAtHead(l1, 0)
    }
  }

  let [head, carry] = dfs(l1, l2)
  if (carry) head = addAtHead(head, carry)
  return head
};

// 链表结点
function ListNode (val) {
  this.val = val
  this.next = null
}

// 在链表头插入元素
function addAtHead (head, val) {
  const newNode = new ListNode(val)
  newNode.next = head
  return newNode
}

// 获取链表长度
function getLength (head) {
  let res = 0
  for (let p = head; p; p = p.next) ++res
  return res
}

/**
 * 递归函数
 * @param {ListNode} l1 链表结点
 * @param {ListNode} l2 链表结点
 * @returns {[ListNode, number]} 新链表头结点、进位
 */
function dfs (l1, l2) {
  if (!l1) return [null, 0]

  let [next, carry] = dfs(l1.next, l2.next)
  const tmp = l1.val + l2.val + carry
  const head = new ListNode(tmp % 10)
  head.next = next
  carry = Math.floor(tmp / 10)
  return [head, carry]
}

module.exports = addTwoNumbers