/**
 * 排序
 * 
 * 时间：`O(NlogN)`, 72ms
 */
var relativeSortArray = function (A, B) {
  const num2Index = new Map() // 数字 => 下标
  for (let i = 0; i < B.length; ++i) {
    num2Index.set(B[i], i)
  }

  return A.sort((a, b) => {
    const ai = num2Index.has(a) ? num2Index.get(a) : -1
    const bi = num2Index.has(b) ? num2Index.get(b) : -1
    
    if (ai !== -1 && bi !== -1) { // 都在B中，按照B的相对顺序
      return ai - bi
    } else if (ai === -1 && bi === -1) { // 都不在B中，按照值升序
      return a - b
    } else { // 剩余情况：在B中的，在前面
      if (ai !== -1) {
        return -1
      } else {
        return 1
      }
    }
  })
};

module.exports = relativeSortArray;