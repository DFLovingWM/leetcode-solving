/**
 * 回溯(TLE)
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

module.exports = canJump