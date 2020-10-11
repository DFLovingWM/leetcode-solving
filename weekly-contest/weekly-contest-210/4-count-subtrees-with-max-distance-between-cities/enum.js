/**
 * 二进制枚举
 * 
 * 时间：
 */
var countSubgraphsForEachDiameter = function(n, edges) {
  edges = edges.map(([u, v]) => [u - 1, v - 1]);

  // 矩阵，表示两点间是否联通
  const mat = Array.from({ length: n }, () => Array.from({ length: n }, () => false));
  for (let [u, v] of edges) {
    mat[u][v] = mat[v][u] = true;
  }

  const res = Array.from({ length: n }, () => 0);
  // 遍历每个组合（这样可以保证每种子树只会遍历一次，避免重复）
  for (let i = (1 << n) - 1; i > 0; --i) {
    // 子树
    if (isSubTree(n, edges, i)) {
      const d = getDiameter(mat, i);
      ++res[d];
    }
  }
  return res.slice(1);
};

// 判断点集`cover`（二进制）能否构成子树：
// 看边数是否满足`E == N - 1`
function isSubTree(n, edges, cover) {

  function inCover(i) {
    return Boolean(cover & (1 << i));
  }

  let nodeCount = countBinary(cover);
  let edgeCount = 0;
  for (const [u, v] of edges) {
    if (inCover(u) && inCover(v)) {
      ++edgeCount;
    }
  }
  return edgeCount === nodeCount - 1;
}

// 求点集`cover`所构成子树的直径（最大距离）
// 两次BFS即可
function getDiameter(mat, cover) {
  const n = mat.length;

  // BFS
  function bfs(start) {
    const visit = Array.from({ length: n }, () => false);
    let currs = [start];
    visit[start] = true;
    let d = 0; // BFS深度

    for (; true; ++d) {
      const nexts = [];
      for (const curr of currs) {
        for (let i = 0; i < n; ++i) {
          // 对于邻接点`i`，有诸多条件：
          if (
            mat[i][curr] && // 相邻
            (cover & (1 << i)) && // 要在子树范围内
            !visit[i] // 未入队
          ) {
            nexts.push(i);
            visit[i] = true;
          }
        }
      }
      if (nexts.length === 0) break;
      currs = nexts;
    }

    return [d, currs];
  }

  // 随便找个起点进行第1次BFS
  let i = 0;
  for (; i < n; ++i) {
    if (cover & (1 << i)) {
      break;
    }
  }
  const [, [j]] = bfs(i);
  // 对“边缘点”进行第2次BFS
  const [d] = bfs(j);
  return d;
}

// 数二进制中有多少个1
// 即求子树中的结点树
function countBinary(x) {
  let res = 0;
  while (x) {
    if (x & 1) ++res;
    x >>>= 1;
  }
  return res;
}

// [
//   [4, [[1,2],[2,3],[2,4]]],
//   [2, [[1,2]]],
//   [3, [[1,2],[2,3]]],
//   [4, [[1,3],[1,4],[2,3]]],
// ].forEach(A => {
//   console.log(countSubgraphsForEachDiameter(...A))
// })