/**
 * 哈希，按照题意来即可
 */
var countLargestGroup = function(n) {
  const sum2Count = Array.from({ length: 37 }, () => 0);
  for (let i = 1; i <= n; ++i) {
    ++sum2Count[getDigitSum(i)];
  }
  // 找到频次最多的
  const maxCount = Math.max(...sum2Count);
  let res = 0;
  for (let i = 0; i < 37; ++i) {
    if (sum2Count[i] === maxCount) {
      ++res;
    }
  }
  return res;
};

function getDigitSum(n) {
  let res = 0;
  while (n) {
    res += Math.floor(n % 10);
    n /= 10;
  }
  return res;
}