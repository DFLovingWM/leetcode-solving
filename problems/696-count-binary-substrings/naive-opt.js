/**
 * scan一遍，关注分割点即可
 * 
 * 时间：O(N)
 * 空间：O(1)
 */
var countBinarySubstrings = function(s) {
  let currCount = 1; // 当前数字的累计数
  let prevCh = s[0]; // 上一个数字
  let prevCount = 0; // 上一个数字的累计数
  let res = 0;       // 保存答案

  for (let i = 1; i < s.length; ++i) {
    if (s[i] === prevCh) {
      ++currCount;
    } else {
      res += Math.min(prevCount, currCount); // 边扫边算
      [prevCount, currCount] = [currCount, 1];
      prevCh = s[i];
    }
  }

  // 别忘了算上最后的
  res += Math.min(prevCount, currCount);

  return res;
};

[
  '00110011',
  '10101'
].forEach(s => {
  console.log(countBinarySubstrings(s))
})