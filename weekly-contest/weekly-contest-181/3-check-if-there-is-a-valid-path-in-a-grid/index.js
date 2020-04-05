const hasValidPath = require('./dfs');

[
  [[2,4,3],[6,5,2]], // 1
  [[1,2,1],[1,2,1]], // 0
  [[1,1,2]], // 0
  [[1,1,1,1,1,1,3]], // 1
  [[2],[2],[2],[2],[2],[2],[6]], // 1
].forEach(maze => {
  console.log(hasValidPath(maze))
})