const {
  equalObject,
  equalArray,
  equal
} = require('./equal');

[
  equalObject({a : 1, b : 2,}, {b:2, a:1}),
  equalArray([1,,,2], [1,,, 2]),
  equal({
    a: [1, 2, {name: 'JK'}],
    b: 100
  }, {
    b: 100,
    a: [1,2, {name: 'JK'}],
  })
].forEach(result => {
  console.log(result)
})

var A = {
  name: 'JK',
  hobby: {
    soccer: false,
    basketball: true
  },
  friends: ['Alice', 'Bob']
}

var B = {
  friends: ['Alice', 'Bob'],
  name: 'JK',
  hobby: {
    basketball: true,
    soccer: false
  }
}

var C = {}

// 循环引用(1)
A.self = A
B.self = B

// 循环引用(2)
A.self2 = B
B.self2 = A

console.log(equal(A, B))