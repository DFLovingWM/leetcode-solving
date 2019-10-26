/**
 * @todo 待将数组改为Deque（自己实现）
 * 
 * 用Deque维护单调的前缀和
 */
var shortestSubarray = function(arr, K) {
  const prefix = [0]
  for (const n of arr) {
    prefix.push(prefix[prefix.length - 1] + n)
  }

  const deque = new PsuDeque() // 双端队列
  let res = arr.length + 1 // 结果

  for (let i = 0; i <= arr.length; ++i) {
    let x = prefix[i]
    while (!deque.empty() && x <= prefix[deque.getLast()]) {
      // 有更优的x（差值更大，距离更近），则替换到结尾（保持单调递增）
      deque.removeLast()
    }

    let y = prefix[i]
    while (!deque.empty() && y - prefix[deque.getFirst()] >= K) {
      // 有满足条件的y，则比较后就可以删除掉x（因为之后的y就算满足了，距离也没这么近）
      res = Math.min(res, i - deque.removeFirst())
    }

    deque.addLast(i)
  }

  return res === arr.length + 1 ? -1 : res
};

// 假的双端队列
class PsuDeque {
  constructor () {
    this.arr = []
  }

  empty () {
    return this.arr.length === 0
  }

  getFirst () {
    return this.arr[0]
  }

  addFirst (x) {
    this.arr.unshift(x)
  }

  removeFirst () {
    return this.arr.shift()
  }

  getLast () {
    return this.arr[this.arr.length - 1]
  }

  addLast (x) {
    this.arr.push(x)
  }

  removeLast () {
    return this.arr.pop()
  }
}

[
  [[1], 1],
  [[1,2], 4],
  [[2,-1,2], 3],
].forEach(input => {
  console.log(shortestSubarray(...input))
})