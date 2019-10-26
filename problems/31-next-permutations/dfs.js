/**
 * 还原DFS的过程
 */
function nextPermutation (arr) {
  if (isNonAscending(arr)) {
    arr.reverse()
    return
  }

  let results = []
  const sortedArr = [...arr].sort((a, b) => a - b)
  dfs(sortedArr, results)

  // 去重
  results = arrayUnique(results)
  
  // 寻找 target 序列的下一个序列
  let next
  for (let i = 0; i < results.length - 1; ++i) {
    const result = results[i]
    if (arrayEqual(result, arr)) {
      next = results[i + 1]
      break
    }
  }

  // 原地修改
  Object.assign(arr, next)
}

function dfs (arr, results, result = []) {
  if (arr.length === 1) {
    result.push(arr[0])
    results.push(result)
    return
  }
  for (let i = 0; i < arr.length; ++i) {
    dfs(
      [...arr.slice(0, i), ...arr.slice(i + 1)],
      results,
      result.concat(arr[i])
    )
  }
}

function arrayUnique (arrays) {
  let uniqueArrays = []
  let has = {}
  const getKey = (array) => array.join(',')
  
  for (const array of arrays) {
    const key = getKey(array)
    if (!has[key]) {
      has[key] = true
      uniqueArrays.push(array)
    }
  }

  return uniqueArrays
}

function arrayEqual (a, b) {
  return a.length === b.length && a.every((_, index) => a[index] === b[index])
}

/**
 * 判断是否非升序
 */
function isNonAscending (arr) {
  for (let i = 0; i < arr.length - 1; ++i) {
    if (arr[i] < arr[i + 1]) {
      return false
    }
  }
  return true
}

module.exports = nextPermutation