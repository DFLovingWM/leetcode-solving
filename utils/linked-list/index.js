function ListNode (val) {
  this.val = val
  this.next = null
}

function from (arr) {
  if (!arr || arr.length === 0) return null

  let nodes = arr.map(val => new ListNode(val))
  nodes.reduce((curNode, nextNode) => {
    curNode.next = nextNode
    return nextNode
  })
  return nodes[0]
}

function print (listNode, delim = '->') {
  let values = []
  let p = listNode
  while (p) {
    values.push(p.val)
    p = p.next
  }
  console.log(values.join(delim))
}

function length (listNode) {
  let ret = 0
  let p = listNode
  while (p) {
    ++ret
    p = p.next
  }
  return ret
}

module.exports = {
  ListNode,
  from,
  print,
  length,
}
