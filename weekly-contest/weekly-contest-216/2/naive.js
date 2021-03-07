/**
 * 贪心
 */
var getSmallestString = function(n, sum) {
  let res = '';
  for (let i = 0; i < n; ++i) { // 逐位考虑
    for (let j = 1; j <= 26; ++j) { // 26个字母都试下，并且从最小的开始（贪心）
      // 特殊情况：最后一个字符，剩余多少就放多少
      if (i === n - 1) {
        res += getChar(sum);
        break;
      }

      // 一般情况：如果放置j能保证后续不会fail，就放
      if (Math.ceil((sum - j) / (n - i - 1)) <= 26) {
        res += getChar(j);
        sum -= j;
        break;
      }
    }
  }
  return res;
};

function getChar(number) {
  return String.fromCharCode('a'.charCodeAt(0) + number - 1);
}

[
  [3,27],
  [5,73],
].forEach(A => {
  console.log(getSmallestString(...A))
})
