/**
 * 双指针法：O(NlogN)
 */
var twoSumLessThanK = function(arr, upperBound) {
  arr.sort((a, b) => a - b);

  let [L, R] = [0, arr.length - 1];
  let res = -1
  while (L < R) {
    const sum = arr[L] + arr[R]
    if (sum >= upperBound) { // 大于+等于
      --R
    } else { // 小于
      ++L
      if (sum > res) { // 更接近
        res = sum
      }
    }
  }
  return res
};

[
  [[34,23,1,24,75,33,54,8], 60],
  [[10,20,30], 15],
  [[803,468,292,154,924,424,197,277,753,86,984,144,105,450,287,265,655,404,407,794,513,976,241,272,84,503,65,654,805,413,362,907,297,473,113,567,646,607,806,674,424,753,870,574,765,170,603,696,513,58], 300],
].forEach(input => {
  console.log(twoSumLessThanK(...input))
})
