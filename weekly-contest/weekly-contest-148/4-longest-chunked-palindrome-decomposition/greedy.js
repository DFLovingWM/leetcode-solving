/**
 * 贪心：从两端开始，一旦回文就切段(以保证段最多)
 * 
 * 时间：`O(N^2)`, 64ms
 */
var longestDecomposition = function (text) {
  let [ll, lr, rl, rr] = [0, 0, text.length - 1, text.length - 1]
  let res = 0

  while (lr < rl) {
    if (text.slice(ll, lr + 1) === text.slice(rl, rr + 1)) {
      res += 2
      ll = lr + 1
      rr = rl - 1
    }
    ++lr
    --rl
  }
  
  if (ll <= rr) ++res // 如果有不成对的，则单独成段

  return res
};

[
  'ghiabcdefhelloadamhelloabcdefghi',
  'merchant',
  'antaprezatepzapreanta',
  'aaa',
].forEach(s => {
  console.log(longestDecomposition(s))
})