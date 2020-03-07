/**
 * 排序
 */
var minNumber = function (nums) {
  nums = nums.map(String).sort((a, b) => {
    const first = a + b;
    const second = b + a;
    if (first < second) return -1;
    if (first === second) return 0;
    return 1;
  });
  return nums.join('');
};