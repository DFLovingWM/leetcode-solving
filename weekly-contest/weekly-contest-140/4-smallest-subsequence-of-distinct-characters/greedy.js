/**
 * 贪心
 */
const letters = 'abcdefghijklmnopqrstuvwxyz'

var smallestSubsequence = function (text) {
  const n = text.length

  // 后缀Set
  const suffixSet = []
  const acc = new Set()
  suffixSet.push(new Set(acc))
  for (let i = n - 1; i >= 0; --i) {
    acc.add(text[i])
    suffixSet.push(new Set(acc))
  }
  suffixSet.reverse()

  // 字母 => 下标数组
  const ch2Index = new Map()
  for (let i = 0; i < n; ++i) {
    const ch = text[i]
    if (!ch2Index.has(ch)) {
      ch2Index.set(ch, [])
    }
    ch2Index.get(ch).push(i)
  }

  // 开始贪心放字母
  const need = new Set(Array.from(text)) // 需要放的字母集
  const k = need.size
  let res = ''
  let prevIndex = -1

  for (let i = 0; i < k; ++i) {
    for (const letter of letters) { // 从`a`到`z`遍历
      if (!need.has(letter)) continue

      const index = ch2Index.get(letter) || []
      const i = findGreater(index, prevIndex)
      if (i === -1) continue

      let ok = true
      for (const ch of need) { // 看看这个位置后面，是否还有全部所需字符
        if (ch !== letter && !suffixSet[index[i] + 1].has(ch)) {
          ok = false
          break
        }
      }
      if (!ok) continue

      res += letter
      need.delete(letter)
      prevIndex = index[i]
      break // 每个位置只能放一个字母，所以放完后要退出，看下一个位置
    }
  }

  return res
};

// 二分查找
function findGreater (arr, x) {
  let [left, right] = [0, arr.length]

  // bisectRight
  while (left < right) {
    const mid = left + (right - left >>> 1)
    if (x >= arr[mid]) {
      left = mid + 1
    } else {
      right = mid
    }
  }

  if (left === arr.length) return -1
  return left
}

module.exports = smallestSubsequence