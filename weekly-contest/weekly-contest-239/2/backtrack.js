/**
 * 回溯（N才20） + 剪枝
 */
var splitString = function(s) {
  const n = s.length;

  function backtrack(i, segmentCount, prevNum) {
    if (i === n && segmentCount > 1) {
      return true;
    }

    for (let j = i; j < n; ++j) {
      if (prevNum === Infinity) { // 随意开始
        if (backtrack(j + 1 , segmentCount + 1, Number(s.slice(i, j + 1)))) {
          return true;
        }
      } else { // 少1
        const currNum = Number(s.slice(i, j + 1));
        if (currNum + 1 === prevNum) {
          if (backtrack(j + 1, segmentCount + 1, currNum)) {
            return true;
          }
        }
      }
    }
    return false;
  }

  return backtrack(0, 0, Infinity);
};