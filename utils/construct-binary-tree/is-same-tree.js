function dfs (p, q) {
  if (!p && !q)
    return true
  else if (!p || !q)
    return false
  else
    return p.val === q.val && dfs(p.left, q.left) && dfs(p.right, q.right)
}

module.exports = dfs