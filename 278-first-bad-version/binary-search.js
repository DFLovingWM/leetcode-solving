/**
 * 二分查找：
 * 如果middle是bad的，那么源头肯定在左边（包括当前位置）；否则在右边。
 * 使用bisectLeft
 */
var solution = function (isBadVersion) {

  function bisectLeft (n) {
    let [left, right] = [1, n]

    while (left < right) {
      let middle = left + Math.floor((right - left) / 2)
      if (isBadVersion(middle)) {
        right = middle
      } else {
        left = middle + 1
      }
    }

    return left
  }

  return function (n) {
    return bisectLeft(n)
  };
};
