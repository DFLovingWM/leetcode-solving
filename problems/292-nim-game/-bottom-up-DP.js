/**
 * Bottom-up DP（超时）
 */
function canWinNim (n) {
  let [a, b, c] = [true, true, true]
  for (let i = 4; i <= n; ++i) {
    [a, b, c] = [b, c, !a || !b || !c]
  }
  return c
}

Array.from({ length: 50 }, (_, index) => index).forEach(n => console.log(n, canWinNim(n)))