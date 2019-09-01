/**
 * Bottom-up DP（通常形式的动态规划）
 */
function canWinNim (n) {
  let [a, b, c] = [true, true, true]
  for (let i = 4; i <= n; ++i) {
    let d = !a || !b || !c;
    [a, b, c] = [b, c, d]
  }
  return c
}

Array.from({ length: 50 }, (_, index) => index).forEach(n => console.log(n, canWinNim(n)))