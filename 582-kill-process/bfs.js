/**
 * BFS
 */
var killProcess = function(pid, ppid, kill) {
  const getChildren = new Map()
  for (let i = 0; i < pid.length; ++i) {
    if (!getChildren.has(ppid[i])) {
      getChildren.set(ppid[i], [])
    }
    getChildren.get(ppid[i]).push(pid[i])
  }

  const res = []
  const queue = [kill]
  while (queue.length) {
    const cur = queue.shift()
    res.push(cur)
    if (getChildren.has(cur)) {
      queue.push(...getChildren.get(cur))
    }
  }
  return res
};

[
  [[1, 3, 10, 5], [3, 0, 5, 3], 5],
].forEach(input => {
  console.log(killProcess(...input))
})