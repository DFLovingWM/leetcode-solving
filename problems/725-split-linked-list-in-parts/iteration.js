/**
 * 尽可能平均分配（有点无聊哦）
 * 
 * 时间：O(N), 76ms
 */
var splitListToParts = function (head, K) {
  // 确定结点数
  let n = 0
  for (let p = head; p; p = p.next) ++n

  // 确定每组数量
  const counts = new Array(K).fill(Math.floor(n / K))
  for (let i = n % K - 1; i >= 0; --i) {
    ++counts[i]
  }

  // 分组
  let dummy = new ListNode('dummy')
  dummy.next = head
  const res = []

  for (const count of counts) {
    let curr = dummy
    for (let i = 0; i < count; ++i) {
      curr = curr.next
    }
    const next = curr.next
    const prev = dummy.next
    dummy.next = next
    curr.next = null // 切断
    res.push(prev)
  }

  return res
};

function ListNode (val) {
  this.val = val
  this.next = null
}

module.exports = splitListToParts