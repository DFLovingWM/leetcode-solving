/**
 * 检查26个字母，每个使用DFS
 */
var containsCycle = function(grid) {
  const [R, C] = [grid.length, grid[0].length];
  const DIR = [[0, -1], [0, 1], [1, 0], [-1, 0]];

  function isValid(r, c) {
    return r >= 0 && r < R && c >= 0 && c < C;
  }

  function run(ch, r0, c0) {
    const visit = Array.from({ length: R }, () => Array.from({ length: C }, () => false));

    function dfs(r, c, pr, pc, len) {
      for (const dir of DIR) {
        let r1 = r + dir[0];
        let c1 = c + dir[1];
        if (!isValid(r1, c1) || grid[r1][c1] !== ch) continue; // 不能走
        if (pr === r1 && pc === c1) continue; // 不走回头路
        if (!visit[r1][c1]) {
          visit[r1][c1] = true;
          if (dfs(r1, c1, r, c, len + 1)) return true;
        } else {
          if (len >= 4) return true;
        }
      }
      return false;
    }

    visit[r0][c0] = true;
    return dfs(r0, c0, -1, -1, 0);
  }

  // 遍历26个字母
  for (let i = 0; i < 26; ++i) {
    const ch = String.fromCharCode(95 + i);

    // 找到第1个出现的位置
    let r0 = -1, c0 = -1;
    for (let r = 0; r < R; ++r) {
      for (let c = 0; c < C; ++c) {
        if (grid[r][c] === ch) {
          r0 = r;
          c0 = c;
          break;
        }
      }
      if (isValid(r0, c0)) break;
    }
    if (!isValid(r0, c0)) continue;

    // 执行
    if (run(ch, r0, c0)) return true;
  }
  return false;
};

[
  // [["a","a","a","a"],["a","b","b","a"],["a","b","b","a"],["a","a","a","a"]],
  // [["c","c","c","a"],["c","d","c","c"],["c","c","e","c"],["f","c","c","c"]],
  // [["a","b","b"],["b","z","b"],["b","b","a"]],
  // [["b","a","c"],["c","a","c"],["d","d","c"],["b","c","c"]],
  [["f","a","a","c","b"],["e","a","a","e","c"],["c","f","b","b","b"],["c","e","a","b","e"],["f","e","f","b","f"]],
].forEach(A => {
  console.log(containsCycle(A))
})

/**
 * faacb
 * eaaec
 * dfbbb
 * ceabe
 * fefbf
 */