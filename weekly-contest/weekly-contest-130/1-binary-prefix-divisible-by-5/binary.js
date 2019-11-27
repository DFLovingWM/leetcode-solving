/**
 * 二进制递推 + 只保留尾数（0或者5）
 */
var prefixesDivBy5 = function (A, ) {
  const res = []
  let acc = 0
  for (let i = 0; i < A.length; ++i) {
    acc = (acc * 2 + A[i]) % 10
    res.push(acc % 5 === 0)
  }
  return res
};

[
  [0,1,1],
  [1,1,1],
  [0,1,1,1,1,1],
  [1,1,1,0,1],
  [1,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,1,1,1,1,0,0,0,1,0,1,1,1,1,0,1,1,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1,0,0,1,1,1],
].forEach(arr => {
  console.log(prefixesDivBy5(arr))
})