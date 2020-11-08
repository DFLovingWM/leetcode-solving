/**
 * 位置权值
 */
var maxSumRangeQuery = function(nums, requests) {
  nums.sort((a, b) => b - a);
  const n = nums.length;

  const delta = Array.from({ length: n + 1 }, () => 0);
  for (const [from, to] of requests) {
    ++delta[from];
    --delta[to + 1];
  }

  const weight = Array.from({ length: n }, () => 0);
  let d = 0;
  for (let i = 0; i < n; ++i) {
    d += delta[i];
    weight[i] = d;
  }

  const index = Array.from({ length: n }, (_, i) => i);
  index.sort((i, j) => weight[j] - weight[i]);
  const arr = new Array(n);
  for (let i = 0; i < n; ++i) {
    arr[index[i]] = nums[i];
  }
  
  let res = 0;
  const mod = 1e9 + 7;
  for (let i = 0; i < n; ++i) {
    res += weight[i] * arr[i];
    res %= mod;
  }
  return res;
};

[
  [[1,2,3,4,5], [[1,3],[0,1]]],
  [[1,2,3,4,5,6], [[0,1]]],
  [ [1,2,3,4,5,10], [[0,2],[1,3],[1,1]]],
].forEach(A => {
  console.log(maxSumRangeQuery(...A))
})