/**
 * 指针或者HashMap(无脑)
 */
var arraysIntersection = function (A, B, C) {
  let [a, b, c] = [0, 0, 0]
  const common = []
  
  while (a < A.length && b < B.length && c < C.length) {
    if (A[a] === B[b] && A[a] === C[c]) {
      common.push(A[a])
      ++a
      ++b
      ++c
      continue
    }

    const min = Math.min(A[a], B[b], C[c])
    if (A[a] === min) {
      ++a
    }
    if (B[b] === min) {
      ++b
    }
    if (C[c] === min) {
      ++c
    }
  }

  return common
};

let arr1 = [1,2,3,4,5], arr2 = [1,2,5,7,9], arr3 = [1,3,4,5,8]
console.log(arraysIntersection(arr1, arr2, arr3))