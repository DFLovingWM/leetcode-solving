/**
 * 回溯：每次切出来一段即可
 * 
 * 时间：84ms
 */
var partition = function (text) {
  const res = []

  function helper (str, acc) {
    if (!str) {
      res.push(acc.slice())
      return
    }

    // 每次切出来1份即可
    // 遍历分割点
    for (let i = 1; i <= str.length; ++i) {
      const left = str.slice(0, i)
      if (isPalindrome(left)) { // 切出来的这个left是回文串，表示可以切
        acc.push(left)
        helper(str.slice(i), acc)
        acc.pop()
      }
    }
  }

  helper(text, [])
  return res
};

// 判断S是否是回文串
function isPalindrome (S) {
  let [L, R] = [0, S.length - 1]
  while (L < R) {
    if (S[L] !== S[R]) return false
    ++L
    --R
  }
  return true
}

module.exports = partition