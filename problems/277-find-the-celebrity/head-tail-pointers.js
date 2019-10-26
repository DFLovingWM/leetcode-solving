/**
 * 头尾双指针的排除法
 * 
 * 时间：O(N), 116ms
 */
var solution = function (knows) {
  return function (n) {
    let [L, R] = [0, n - 1]

    while (L < R) {
      if (knows(L, R)) {
        // 如果L认识R，则L肯定不是候选人，排除L
        ++L
      } else {
        // 如果L不认识R，则R肯定不是候选人，排除R
        --R
      }
    }

    let candidate = L
    for (let i = 0; i < n; ++i) {
      if (candidate !== i) {
        if (knows(candidate, i) || !knows(i, candidate)) {
          return -1
        }
      }
    }
    return candidate
  };
};

module.exports = solution