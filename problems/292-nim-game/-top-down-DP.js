/**
 * Top-down DP（栈溢出）
 */
var canWinNim = function (N) {
  const cache = new Map()

  // 剩余`n`块石头时，是否能赢
  function helper (n) {
    if (n >= 1 && n <= 3) return true
    if (cache.has(n)) return cache.get(n)
    
    let res = false
    for (let i = 1; i <= 3; ++i) {
      if (!helper(n - i)) { // 存在一种方案让对方输了，那我就赢了
        res = true
        break
      }
    }
    cache.set(n, res)
    return res
  }

  return helper(N)
};

[1, 2, 3, 4, 5, 43].forEach(n => console.log(canWinNim(n)))

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