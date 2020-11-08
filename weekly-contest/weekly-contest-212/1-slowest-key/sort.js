/**
 * 排序
 */
var slowestKey = function(releaseTimes, keysPressed) {
  const arr = [];
  for (let i = 0; i < releaseTimes.length; ++i) {
    arr.push([keysPressed[i], releaseTimes[i] - (i === 0 ? 0 : releaseTimes[i - 1])]);
  }
  arr.sort((A, B) => {
    if (A[1] !== B[1]) return B[1] - A[1];
    return B[0].charCodeAt(0) - A[0].charCodeAt(0);
  });
  return arr[0][0];
};