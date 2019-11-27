function ListNode (val) {
  this.val = val
  this.next = null
}

/**
 * Hash
 */
var removeZeroSumSublists = function(head) {
  let arr = toArray(head)

  while (true) {
    const prefix = getPrefix(arr)
    const [from, to] = getZeroRange(prefix)
    if (from === -1 && to === -1) {
      break
    } else {
      arr = arr.slice(0, from).concat(arr.slice(to))
    }
  }

  return toLinkedList(arr)
};

function toArray (head) {
  let arr = []
  while (head) {
    arr.push(head.val)
    head = head.next
  }
  return arr
}

function getPrefix (arr) {
  let prefix = [0]
  for (const n of arr) {
    prefix.push(prefix[prefix.length - 1] + n)
  }
  return prefix
}

function getZeroRange (prefix) {
  const getIndex = new Map()
  for (let i = 0; i < prefix.length; ++i) {
    const [index, value] = [i - 1, prefix[i]]
    if (getIndex.has(value)) {
      return [
        (getIndex.get(value)) + 1, // 闭
        index + 1 // 开
      ]
    }
    getIndex.set(value, index)
  }
  return [-1, -1]
}

function toLinkedList (arr) {
  const dummy = new ListNode()
  let p = dummy
  for (const val of arr) {
    p.next = new ListNode(val)
    p = p.next
  }
  return dummy.next
}

const {
  from,
  print,
} = require('../utils/linked-list/index');
[
  [1,2,-3,3,1],
  [1,2,3,-3,4],
  [1,2,3,-3,-2],
].forEach(input => {
  const head = from(input)
  const newHead = removeZeroSumSublists(head)
  console.log(print(newHead, ','))
})
