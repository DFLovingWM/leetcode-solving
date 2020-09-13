/**
 * 只看头尾
 */
var mostVisited = function(n, rounds) {
  const head = rounds[0], tail = rounds[rounds.length - 1];
  const res = [];
  for (let i = head; true; ++i) {
    if (i > n) {
      i = 0;
      continue;
    }
    res.push(i);
    if (i === tail) break;
  }
  res.sort((a, b) => a - b);
  return res;
};

[
  [4, [1,3,1,2]],
  [2, [2,1,2,1,2,1,2,1,2]],
  [7, [1,3,5,7]],
  [3, [3,2,1,2,1,3,2,1,2,1,3,2,3,1]],
].forEach(A => {
  console.log(mostVisited(...A))
})