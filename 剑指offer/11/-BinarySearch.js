/**
 * 二分查找
 */
var minArray = function (numbers) {
  let left = 0;
  let right = numbers.length;
  const pivot = numbers[0]; // 重点：选首元素作为二分的参照物

  while (left < right) {
    const mid = left + (right - left >>> 1);
    if (numbers[mid] === pivot) { // 相等 => 

    } else if (numbers[mid] < pivot) { // 比首元素小，
      right = mid;
    } else { // 大于等于首元素，往右走（mid不是答案）
      left = mid + 1;
    }
  }

  if (left >= numbers.length) { // 不是旋转数组的情况（left会一直往右走，直到超过数组长度）
    return numbers[0];
  }
  return numbers[left];
};