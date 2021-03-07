/**
 * 贪心
 */
var maximumScore = function(a, b, c) {
  let res = 0;
  const arr = [a, b, c];
  while (true) {
    const sortedArr = arr
      .map((e, i) => [e, i])
      .sort((A, B) => B[0] - A[0]);
    if (!sortedArr[0][0] || !sortedArr[1][0]) {
      break;
    }
    const [first, second] = sortedArr;
    --arr[first[1]];
    --arr[second[1]];
    ++res;
  }
  return res;
};
