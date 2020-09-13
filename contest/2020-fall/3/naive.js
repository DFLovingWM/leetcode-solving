/**
 * @param {string} leaves
 * @return {number}
 */
var minimumOperations = function(leaves) {
  const n = leaves.length;
  let [l, r] = [0, n - 1];
  let res = 0;
  if (leaves[l] === 'y') {
    ++res;
    leaves[l] = 'r';
  }
  if (leaves[r] === 'y') {
    ++res;
    leaves[r] = 'r';
  }

  while (l < n && leaves[l] === 'r') ++l;
  while (r >= 0 && leaves[r] === 'r') --r;
  
  let middle = r - l + 1;
  if (middle < 0) return 1;
  let y = 0;
  for (let i = l; i <= r; ++i) {
    if (leaves[i] === 'y') {
      ++y;
    }
  }
  // 全变成r，再改变1个
  let a = y + 1;
  // 全变成y
  let b = middle - y;
  // console.log(res)
  return res + Math.min(a, b);
};


[
  'rrryyyrryyyrr', // 2
  'ryr', // 0
  'rrr', // 1
  'yyy', // 2
  'rryrr', // 0
  'ryryryry', // 3
].forEach(s => {
  console.log(minimumOperations(s));
})