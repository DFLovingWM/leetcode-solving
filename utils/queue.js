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

module.exports = Queue