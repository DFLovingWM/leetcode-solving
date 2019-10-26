/**
 * 根据字符串长度，分类讨论
 * 
 * 时间：O(N), 76ms
 * 空间：O(1)
 */
var isOneEditDistance = function (S, T) {
  const sLen = S.length
  const tLen = T.length

  if (sLen === tLen) { // 修改：看汉明距离是否为1
    let diff = 0
    for (let i = 0; i < sLen; ++i) {
      if (S[i] !== T[i]) ++diff
      if (diff > 1) return false
    }
    return diff === 1
  } else if (sLen - 1 === tLen) { // 删除1个字符
    return moreThan1(S, T)
  } else if (sLen + 1 === tLen) { // 增加1个字符
    return moreThan1(T, S)
  }

  return false
};

function moreThan1 (S, T) {
  const sLen = S.length
  const tLen = T.length

  let diff = 0
  for (let i = 0, j = 0; i < sLen; ++i, ++j) {
    if (j === tLen || S[i] !== T[j]) {
      ++diff
      if (diff > 1) return false
      --j
    }
  }

  return true
}

module.exports = isOneEditDistance