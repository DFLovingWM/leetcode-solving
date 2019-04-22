/**
 * [TLE]
 * 看作`tree`，进行`DFS`
 * `O(2^N)`，N稍微大点就超时，因此不可行
 */
let stop, result

var canJump = function(arr) {
  stop = false
  result = false
  dfs(arr, 0)
  return result
};

function dfs (arr, i) {
  if (i === arr.length - 1) {
    stop = true
    result = true
    return
  }
  for (let j = 1; j <= arr[i]; ++j) {
    dfs(arr, i + j)
    if (stop) return
  }
}

[
  [2,3,1,1,4],
  [3,2,1,0,4],
].forEach(arr => {
  console.log(canJump(arr))
})