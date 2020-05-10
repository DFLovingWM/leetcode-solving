/**
 * 贪心：有苹果才走这条路，否则剪枝
 */
var minTime = function(n, edges, hasApple) {
  const p2c = new Map(); // 父 => 子
  for (const [p, c] of edges) {
    if (!p2c.has(p)) {
      p2c.set(p, []);
    }
    p2c.get(p).push(c);
  }

  const subTreeHasApple = new Array(n).fill(false);
  // 后序遍历：求某个结点所在子树中是否有苹果
  function isSubTreeHasApple(node) {
    let has = hasApple[node];
    for (const child of (p2c.get(node) || [])) {
      if (isSubTreeHasApple(child)) {
        has = true;
      }
    }
    return subTreeHasApple[node] = has;
  }
  isSubTreeHasApple(0);

  let step = 0;
  // 前序遍历：模拟走的过程
  function dfs(node) {
    // 判断是否要继续往下走
    for (const child of (p2c.get(node) || [])) {
      // 这个子结点有，我就走它；否则不走
      if (subTreeHasApple[child]) {
        ++step; // 往下走(探索)，算1步
        dfs(child);
        ++step; // 往上走(回溯)，算1步
      }
    }
  }
  dfs(0);
  return step;
};

[
  [7, [[0,1],[0,2],[1,4],[1,5],[2,3],[2,6]], [false,false,true,false,true,true,false]],
  [7, [[0,1],[0,2],[1,4],[1,5],[2,3],[2,6]], [false,false,true,false,false,true,false]],
  [7, [[0,1],[0,2],[1,4],[1,5],[2,3],[2,6]], [false,false,false,false,false,false,false]],
].forEach(A=>{
  console.log(minTime(...A))
})