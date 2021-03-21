/**
 * 二分
 * maxMin？
 */
var maxValue = function(n, index, maxSum) {

  function check(max) {
    // 使 sum 最小化
    let sum = 0;

    // 向左扩展，最右的 1 的下标
    const i = index - (max - 1);
    if (i >= 0) {
      sum += 1 * i + getSum(1, max);
    } else {
      sum += getSum(max - index, max);
    }

    // 向右，同理
    const j = index + (max - 1);
    if (j < n) {
      sum += 1 * (n - 1 - j) + getSum(1, max);
    } else {
      sum += getSum(max - (n - 1 - index), max);
    }

    sum -= max;
    return sum <= maxSum;
  }

  let [l, r] = [0, 1e9 + 1];
  let ans;
  while (l < r) {
    const m = (l + r) >>> 1;
    if (check(m)) { // 如果满足，则找更大一点
      l = m + 1;
      ans = m;
    } else {
      r = m;
    }
  }
  return ans;
};

function getSum(left, right) {
  return (left + right) * (right - left + 1) / 2;
}

[
  [3,2,18]
].forEach(A => {
  console.log(maxValue(...A));
})