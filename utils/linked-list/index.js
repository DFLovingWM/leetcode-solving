function ListNode (val) {
  this.val = val
  this.next = null
}

function n (val, next = null) {
  const res = new ListNode(val)
  res.next = next
  return res
}

function print (listNode) {
  const res = []
  while (listNode) {
    res.push(listNode.val)
    listNode = listNode.next
  }
  console.log(res)
}

function serialize (listNode) {
  const res = []
  while (listNode) {
    res.push(listNode.val)
    listNode = listNode.next
  }
  return res
}

function deserialize (arr) {
  const dummy = n()
  arr.reduce((node, val) => {
    node.next = n(val)
    return node.next
  }, dummy)
  return dummy.next
}

module.exports = {
  n,
  print,
  serialize,
  deserialize
}
