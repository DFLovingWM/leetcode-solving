// O(1)
var DinnerPlates = function(capacity) {
  this.capacity = capacity
  this.stacks = []
  this.nextPush = 0
  this.nextPop = -1
};

// O(N)
DinnerPlates.prototype.push = function(val) {
  if (this.nextPush >= this.stacks.length) {
    this.stacks.push(new Stack([val]))

  }
};

// O(N)
DinnerPlates.prototype.pop = function() {
  while ()
};

// O(1)
DinnerPlates.prototype.popAtStack = function(index) {
  const stack = this.stacks[index]
  if (stack.empty()) {
    return -1
  }
  return stack.pop()
};


class Stack {
  constructor (arr = []) {
    this.arr = arr
  }

  size () {
    return this.arr.length
  }

  empty () {
    return this.arr.length === 0
  }

  push (n) {
    this.arr.push(n)
  }

  pop () {
    if (this.arr.length === 0) {
      return -1
    } else {
      return this.arr.pop()
    }
  }
}
