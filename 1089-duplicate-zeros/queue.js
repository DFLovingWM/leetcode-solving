class Queue {
  constructor (arr = []) {
    this.arr = arr
  }

  empty () {
    return this.arr.length === 0
  }

  push (newElement) {
    this.arr.push(newElement)
  }

  pop () {
    return this.arr.shift()
  }

  front () {
    return this.arr[0]
  }

  back () {
    return this.arr[this.arr.length - 1]
  }
}

/**
 * 思路：从前往后写
 * 遇到`0`时，因为需要原地替换元素，所以可以将被替换的数字用`queue`存起来
 * 然后下次先遍历队列里面的
 * 
 * - Time: O(N)
 * - Space: 维护了一个queue，所以应该是O(N)
 */
var duplicateZeros = function(arr) {
  let queue = new Queue()
  let length = arr.length
  let insertIndex = 0, checkIndex = 0

  function insert (n) {
    if (insertIndex >= length) return

    if (checkIndex - 1 < insertIndex) {
      queue.push(arr[insertIndex]) // 暂存到queue中
    }
    arr[insertIndex++] = n
  }

  while (insertIndex < length) {
    let next
    if (queue.empty()) {
      next = arr[checkIndex++]
    } else {
      next = queue.pop()
    }

    if (next === 0) {
      insert(0)
      insert(0)
    } else {
      insert(next)
    }
  }

  return arr
};

[
  [1,0,2,3,0,4,5,0],
  [1,2,3],
  [0,0,0,0,0,0,0]
].forEach(arr => {
  console.log(duplicateZeros(arr))
})
