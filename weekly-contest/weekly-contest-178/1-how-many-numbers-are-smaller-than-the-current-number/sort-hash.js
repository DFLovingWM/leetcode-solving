/**
 * 排序 + 哈希
 * 
 * 时间：O(NlogN), 96ms
 */
var smallerNumbersThanCurrent = function(nums) {
  const arr = Array.from(nums).sort((a, b) => a - b);
  const hash = Array.from({ length: 101 }, () => 0);
  for (let i = 0; i < arr.length; ++i) {
      if (i === 0 || arr[i] !== arr[i - 1]) {
          hash[arr[i]] = i;
      }
  }
  return nums.map(num => hash[num]);
};