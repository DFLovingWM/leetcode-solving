/**
 * 二分查找：
 * 1. 筛选出最小前缀后（如果单词存在前缀，那么在备选数组中是唯一确定的）
 * 2. 再使用bisectRight（找的是更大值，统一了“等于前缀”、“包含前缀”两种情况）
 * 
 * 时间：104ms
 * 空间：42MB
 */
var replaceWords = function (dict, sentence) {
  // 排序，使相似前缀挨在一起
  dict.sort()
  // 筛选出最小前缀
  const prefixes = []
  for (const word of dict) {
    if (prefixes.length === 0 || !word.startsWith(prefixes[prefixes.length - 1])) { // 不以上一个为前缀
      prefixes.push(word)
    }
  }

  const roots = []
  for (const word of sentence.split(' ')) {
    const i = bisectRight(prefixes, word) - 1 // 如果满足前缀，那么找到的i是前缀的右边，所以需要减去1
    if (i === -1 || !word.startsWith(prefixes[i])) { // 找不到，或者不满足
      roots.push(word)
    } else {
      roots.push(prefixes[i])
    }
  }
  return roots.join(' ')
};

function bisectRight (arr, x) {
  let [left, right] = [0, arr.length]
  while (left < right) {
    const mid = left + (right - left >>> 1)
    if (x < arr[mid]) {
      right = mid
    } else {
      left = mid + 1
    }
  }
  return left
}

module.exports = replaceWords