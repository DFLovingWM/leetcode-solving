/**
 * 贪心：走二进制相反的路
 * 
 * 时间：O(20N)=O(N), 288ms
 */
var getMaximumXor = function(nums, maximumBit) {
  let sum = nums.reduce((acc, e) => acc ^ e, 0);
  const res = [];
  for (let i = nums.length - 1; i >= 0; --i) {
    res.push(getOp(sum, maximumBit));
    sum ^= nums[i];
  }
  return res;
};

// 二进制：走与 xs 相反的路
function getOp(xs, maximumBit) {
  let res = '';
  for (const x of toBinaryArr(xs, maximumBit)) {
    res += 1 - x;
  }
  return parseInt(res, 2);
}

function toBinaryArr(num, maximumBit) {
  return num
    .toString(2)
    .padStart(maximumBit, '0')
    .split('')
    .map(Number);
}
