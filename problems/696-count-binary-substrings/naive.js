/**
 * scan一遍，关注分割点即可
 * 
 * 时间：O(N)
 * 空间：O(N)
 */
var countBinarySubstrings = function(s) {
  const arr = [];
  let acc = 1;
  let prev = s[0];
  
  for (let i = 1; i < s.length; ++i) {
    if (s[i] === prev) {
      ++acc;
    } else {
      arr.push(acc);
      acc = 1;
      prev = s[i];
    }
  }
  arr.push(acc); // 别忘了最后的

  let res = 0;
  for (let i = 1; i < arr.length; ++i) {
    res += Math.min(arr[i - 1], arr[i]);
  }
  return res;
};
