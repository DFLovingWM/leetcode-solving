/**
 * Top-down DP（记忆化搜索）
 */
var canWinNim = function(n) {
  const helper = getHelper()
  return helper(n)
};

function getHelper () {
  const answer = new Map() // 记忆/缓存
  return function helper (n) {
    if (answer.has(n)) {
      return answer.get(n)
    }

    let result
    if (n < 4) {
      result = true
    } else {
      result = !canWinNim(n - 1) || !canWinNim(n - 2) || !canWinNim(n - 3)
    }
    answer.set(n, result)
    return result
  }
}

[1,2,3,4,5,43].forEach(n => console.log(canWinNim(n)))

/**
 * 能拿1~3
 * 0 F
 * 1 T
 * 2 T
 * 3 T
 * 4 F
 * 5 T
 * 6 F
 */