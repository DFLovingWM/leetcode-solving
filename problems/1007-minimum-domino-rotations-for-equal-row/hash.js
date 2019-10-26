/**
 * Hash
 */
var minDominoRotations = function(A, B) {
  let map = new Map(),
      length = A.length
  const MAX = 20000
  let result = MAX

  for (let i = 0; i < length; ++i) {
    let [a, b] = [A[i], B[i]]
    if (a === b) {
      addIndex(map, a, 0)
    } else {
      addIndex(map, a, 1)
      addIndex(map, b, -1)
    }
  }

  // console.log(map)

  for (const [n, arr] of map.entries()) {
    if (arr.length === length) { // which satisfies the condition...
      let count1 = arr.filter(item => item === 1).length
      let countN1 = arr.filter(item => item === -1).length
      result = Math.min(count1, countN1)
    }
  }

  return result === MAX ? -1 : result
};

function addIndex (map, key, index) {
  if (!map.has(key)) map.set(key, [])
  map.get(key).push(index)
}

[
  [[2,1,2,4,2,2], [5,2,6,2,3,2]],
  [[3,5,1,2,3], [3,6,3,3,4]]
].forEach(input => {
  console.log(minDominoRotations(...input))
})