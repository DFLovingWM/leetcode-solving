/**
 * 贪心：每次从数量最多的开始尝试，只要不冲突就可以放
 * 
 * 时间：O(N), 72ms
 */
var longestDiverseString = function (a, b, c) {
  const arr = [['a', a], ['b', b], ['c', c]];

  let res = '';
  while (true) {
    // 排序，为了每次放最多的那个字母
    arr.sort((A, B) => B[1] - A[1]);
    // 没有剩余了
    if (arr[0][1] === 0) {
      break;
    }

    const n = res.length;
    for (let i = 0; i < 3; ++i) {
      if (arr[i][1] > 0) { // 有剩余
        if (!(n >= 2 && res[n - 1] === arr[i][0] && res[n - 2] === arr[i][0])) { // 不冲突
          res += arr[i][0];
          --arr[i][1];
          break;
        }
      }
    }
    // 无法再增加
    if (res.length === n) break;
  }
  return res;
};

[
  [1,1,7],
  [2,2,1],
  [7,1,0]
].forEach(A => {
  console.log(longestDiverseString(...A))
})