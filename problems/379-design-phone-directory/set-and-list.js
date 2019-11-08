/**
 * 集合 + 链表
 * 
 * 时间：156ms
 * 空间：44.7MB
 */

// O(N)
var PhoneDirectory = function (maxNumbers) {
  this.avail = new ListNode('dummy') // 可用
  this.availCount = maxNumbers // 可用数量
  this.unavail = new Set() // 不可用

  let p = this.avail
  for (let i = 0; i < maxNumbers; ++i) {
    p.next = new ListNode(i)
    p = p.next
  }
};

// O(1)
PhoneDirectory.prototype.get = function () {
  if (this.availCount === 0) return -1

  // 挑选头结点
  const target = this.avail.next

  this.avail.next = target.next // 链表中删除
  this.unavail.add(target.val) // 集合中增加
  --this.availCount

  return target.val
};

// O(1)
PhoneDirectory.prototype.check = function (number) {
  return !this.unavail.has(number)
};

// O(1)
PhoneDirectory.prototype.release = function (number) {
  if (!this.unavail.has(number)) return

  this.unavail.delete(number) // 集合中删除
  // 链表中增加
  const next = this.avail.next
  const curr = new ListNode(number)
  this.avail.next = curr
  curr.next = next
  ++this.availCount
};

function ListNode (val) {
  this.val = val
  this.next = null
}

module.exports = PhoneDirectory