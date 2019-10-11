/**
 * 构建入度、出度表。名人的入度为n-1，出度为0
 * 
 * 时间：O(N^2), 832ms
 */
var solution = function (knows) {
  return function (n) {
    const inDegree = Array.from({ length: n }, () => 0)
    const outDegree = Array.from({ length: n }, () => 0)

    for (let i = 0; i < n; ++i) {
      for (let j = 0; j < n; ++j) {
        if (i !== j && knows(i, j)) {
          ++outDegree[i]
          ++inDegree[j]
        }
      }
    }

    let res = -1
    for (let i = 0; i < n; ++i) {
      if (inDegree[i] === n - 1 && outDegree[i] === 0) {
        if (res === -1) {
          res = i
        } else {
          res = -1
          break
        }
      }
    }
    return res
  };
};

module.exports = solution