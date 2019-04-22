const LEFT = '(', RIGHT = ')'
let results

function generateParenthesis (n) {
  results = []
  dfs(n)
  return results
}

function dfs (sum, left = 0, right = 0, result = '') {
  if (left === sum && right === sum) {
    results.push(result)
    return
  }

  if (left === right) { // Equal => Can only fetch [left]
    dfs(sum, left + 1, right, result + LEFT)
  } else { // [Right] remains more...
    if (sum - left > 0) { // If there's still [left]s
      dfs(sum, left + 1, right, result + LEFT)
    }
    dfs(sum, left, right + 1, result + RIGHT)
  }
}
