/**
 * 贪心
 * 
 * 时间：O(N), 136ms
 */
var solution = function (knows) {
  return function (n) {
    // 贪心选取候选人
    let candidate = 0
    for (let i = 0; i < n; ++i) {
      if (i !== candidate && knows(candidate, i)) {
        // 当前候选人肯定不是名人，换到i
        candidate = i
      }
    }

    // 验证候选人
    for (let i = 0; i < n; ++i) {
      if (candidate !== i && (!knows(i, candidate) || knows(candidate, i))) {
        return -1
      }
    }

    return candidate
  };
};

module.exports = solution