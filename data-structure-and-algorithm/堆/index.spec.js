const {
  heapify,
  heapPush,
  heapPop,
} = require('./index')

const arr = '793245'.split('')
const heap = heapify(arr)
console.log('heap: ', heap)
while (heap.length) {
  console.log(heapPop(heap))
}
for (let n of [1,2,3,4,0,-1,-2]) {
  heapPush(heap, n)
}
console.log('heap:', heap)
while (heap.length) {
  console.log(heapPop(heap))
}