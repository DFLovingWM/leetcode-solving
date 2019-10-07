const NEIGHBORS = {
  0: [1],
  1: [0, 2],
  2: [1, 3],
  3: [2, 4],
  4: [3, 5],
  5: [4, 6],
  6: [5, 7],
  7: [6, 8],
  8: [7, 9],
  9: [8]
}

/**
 * BFS，构造步进字符串
 */
var countSteppingNumbers = function (low, high) {
  const queue = new Queue()
  const res = new Set()
  
  for (let i = 0; i <= 9; ++i) {
    queue.push(String(i))
  }

  while (!queue.empty()) {
    const curr = queue.popFront()
    if (isValid(Number(curr), low, high)) {
      res.add(Number(curr))
    }

    // 在tail加
    for (const neighbor of NEIGHBORS[curr[curr.length - 1]]) {
      if (isValid(Number(curr + neighbor), low, high)) {
        queue.push(curr + neighbor)
      }
    }

    // 在head加
    for (const neighbor of NEIGHBORS[curr[0]]) {
      if (neighbor !== 0 && isValid(Number(neighbor + curr), low, high)) {
        queue.push(neighbor + curr)
      }
    }
  }

  return Array.from(res).sort((a, b) => a - b) // 升序
};

function isValid (number, low, high) {
  return number >= low && number <= high
}

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

[
  [0, 21],
  [10, 15],
].forEach(input => {
  console.log(countSteppingNumbers(...input))
})