/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var minSumOfLengths = function(arr, target) {
  let sum = 0;
  const getIndex = new Map();
  getIndex.set(0, -1);
  const candidates = []; // 候选区间
  for (let i = 0; i < arr.length; ++i) {
    sum += arr[i];
    if (getIndex.has(sum - target)) {
      candidates.push([getIndex.get(sum - target) + 1, i + 1]);
    }
    getIndex.set(sum, i);
  }

  candidates.sort((A, B) => {
    const al = A[1] - A[0];
    const bl = B[1] - B[0];
    // 最短优先
    if (al !== bl) return al - bl;
    // 下标更小次优先
    return A[0] - B[0];
  });
// console.log(candidates)
  if (candidates.length < 2) return -1;
  // 找与两个不相交的
  let i, j;
  let curr, next;
  for (i = 0; i < candidates.length; ++i) {
    for (j = i + 1; j < candidates.length; ++j) {
      if (nonOverlap(candidates[i], candidates[j])) {
        curr = candidates[i];
        next = candidates[j];
        return (curr[1] - curr[0]) + (next[1] - next[0]);
      }
    }
  }
  return -1;
};

function nonOverlap(A, B) {
  return A[0] >= B[1] || A[1] <= B[0];
}

[
  [[64,5,20,9,1,39], 69],
  [[31,1,1,18,15,3,15,14], 33],
].forEach(A => {
  console.log(minSumOfLengths(...A))
})