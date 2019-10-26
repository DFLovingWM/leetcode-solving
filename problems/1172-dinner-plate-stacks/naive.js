// O(1)
var DinnerPlates = function(capacity) {
  this.capacity = capacity
  this.stacks = []
};

// O(N)
DinnerPlates.prototype.push = function(val) {
  for (let i = 0; i < this.stacks.length; ++i) {
    if (this.stacks[i].size() < this.capacity) {
      this.stacks[i].push(val)
      return
    }
  }

  const stack = new Stack()
  stack.push(val)
  this.stacks.push(stack)
};

// O(N)
DinnerPlates.prototype.pop = function() {
  const stacks = this.stacks

  for (let i = stacks.length - 1; i >= 0; --i) {
    if (!stacks[i].empty()) {
      return stacks[i].pop()
    }
  }

  return -1
};

// O(1)
DinnerPlates.prototype.popAtStack = function(index) {
  const stacks = this.stacks
  return stacks[index].pop()
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
