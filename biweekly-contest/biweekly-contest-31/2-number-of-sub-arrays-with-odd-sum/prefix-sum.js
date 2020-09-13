/**
 * 前缀和
 */
var numOfSubarrays = function(arr) {
  // 前缀和，其实记录奇偶性即可
  const prefix = [0];
  let sum = 0;
  let res = 0;
  let odd = 0, even = 0;
  for (const num of arr) {
    sum = (sum + num) % 2;
    if (num & 1) {
      odd = 
    }
  }
  return res;
};