/**
 * Stack solution. Detail:
 * - If `+`/`*`/`/`, replace the top.
 * - If `-`, push new top.
 * - Calculate the sum of this stack.
 * 
 * Time: O(N), 76ms
 */
var clumsy = function(N) {
  let stack = new Stack()
  stack.push(N)
  let operatorGenerator = createOperators()
  let result = 0

  for (let i = N - 1; i >= 1; --i) {
    let operator = operatorGenerator.next()

    if (operator !== '-') {
      stack.push(cal(stack.pop(), i, operator))
    } else {
      stack.push(-i)
    }
  }

  // console.log(stack.arr)

  while (!stack.empty()) {
    result += stack.pop()
  }

  return result
};

class Stack {
  constructor (arr = []) {
    this.arr = arr
  }

  push (n) {
    this.arr.push(n)
  }

  pop () {
    return this.arr.pop()
  }

  empty () {
    return this.arr.length === 0
  }

  top () {
    return this.arr[this.arr.length - 1]
  }
}

function cal (x, y, method) {
  switch (method) {
    case '+':
      return x + y
    case '-':
      return x - y
    case '*':
      return x * y
    case '/':
      let ret = Math.floor(Math.abs(x / y))
      return x * y > 0 ? ret : -ret
  }
}

function createOperators () {
  let count = 0
  return {
    next () {
      let ret
      if (count === 0) {
        ret = '*'
      } else if (count === 1) {
        ret = '/'
      } else if (count === 2) {
        ret = '+'
      } else {
        ret = '-'
      }
      count = (count + 1) % 4
      return ret
    }
  }
}

[
  [4],
  [10]
].forEach(input => {
  console.log(clumsy(...input))
})