/**
 * 问题1(特例)：组合2个数组
 * 比如`A=[1,2], B=[3]`，那么返回`[ [1,3], [2,3] ]`
 */
function combine2Array (A, B) {

}

/**
 * 问题2(特例)：组合3个数组
 */
function combine3Array (A, B, C) {

}

/**
 * 问题3(通用)：组合N个数组
 */
function combineNArray (arrays) {
  const pairs = []
  helper(arrays, 0, pairs, [])
  return pairs
}

// 递归函数（参数即状态）
function helper (arrays, i, pairs, tmpPair) {
  // 递归的终止条件（递归树中的 NULL 结点）
  if (i === arrays.length) {
    pairs.push(tmpPair.slice())
    return
  }

  arrays[i].forEach(n => {
    tmpPair.push(n) // 探索：选择n
    helper(arrays, i + 1, pairs, tmpPair)
    tmpPair.pop() // 回溯：撤销n
  })
}

console.log(combineNArray([
  ['红', '白', '蓝'],
  ['大', '小'],
]))


