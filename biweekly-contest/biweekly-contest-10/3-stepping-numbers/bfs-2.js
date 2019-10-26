const NEIGHBORS = {
  '0': ['1'],
  '1': ['0', '2'],
  '2': ['1', '3'],
  '3': ['2', '4'],
  '4': ['3', '5'],
  '5': ['4', '6'],
  '6': ['5', '7'],
  '7': ['6', '8'],
  '8': ['7', '9'],
  '9': ['8']
}

/**
 * 字符串BFS
 * 
 * 时间：228ms
 */
var countSteppingNumbers = function (low, high) {
  const queue = new Queue()
  let res = [0]
  
  for (let i = 1; i <= 9; ++i) {
    if (i <= high) {
      queue.push(String(i))
    }
  }

  while (!queue.empty()) {
    const curr = queue.popFront()

    res.push(Number(curr))

    // 结尾加1个相邻字符
    for (const neighbor of NEIGHBORS[curr[curr.length - 1]]) {
      if (Number(curr + neighbor) <= high) {
        queue.push(curr + neighbor)
      }
    }
  }

  let i = 0
  while (res[i] < low) ++i
  res = res.slice(i)

  return res
};

// 队列
class Queue {
  constructor () {
    this.arr = []
  }

  empty () {
    return this.arr.length === 0
  }

  push (x) {
    this.arr.push(x)
  }

  popFront () {
    return this.arr.shift()
  }

  front () {
    return this.arr[0]
  }
}

module.exports = countSteppingNumbers