/**
 * 
 */
var maxSizeSlices = function (arr) {
  const n = arr.length;
  return Math.max(
    run(arr.slice(0, n - 1)),
    run(arr.slice(1, n))
  );
};

function run(arr) {
  const n = arr.length;
  const dp = Array.from({ length: n + 1 }, () => 0);
  for (let i = 1; i <= n; ++i) {
    dp[i] = Math.max(
      dp[i - 1],
      arr[i - 1] + (i - 2 >= 0 ? dp[i - 2] : 0)
    );
  }
  return dp[n];
}