/**
 * 排序 + 双指针
 * 全程避免 O(N^2) 时间复杂度
 */
var countPairs = function(n, edges, queries) {

  function getKey(u, v) {
    // 需保证次序，比如大的总在左
    if (u < v) {
      [u, v] = [v, u];
    }
    return u * (n + 1) + v;
  }

  function restoreKey(key) {
    return [
      Math.floor(key / (n + 1)),
      key % (n + 1)
    ];
  }

  // 度
  const degree = Array.from({ length: n + 1 }, () => 0);
  // 两点的边数(记录重复边)
  const join = new Map();
  for (const [a, b] of edges) {
    ++degree[a];
    ++degree[b];
    const key = getKey(a, b);
    join.set(key, (join.get(key) || 0) + 1);
  }

  // 排序（用于双指针）
  const arr = degree.slice(1).sort((a, b) => a - b);
  const Q = queries.length;
  const res = Array.from({ length: Q }, () => 0);

  for (let i = 0; i < Q; ++i) {
    const target = queries[i];

    // 双指针遍历
    let r = n - 1;
    for (let l = 0; l < n; ++l) {
      // 找满足条件的最小/左的 r
      while (r >= 0 && arr[l] + arr[r] > target) {
        --r;
      }
      // r 右边全部都满足时，批量累加
      // 注意：需要避免重复/回头搭配，r 不能在 l 左边，即保证 l 总是向右搭配
      res[i] += n - Math.max(r, l) - 1;
    }

    // 累加完毕后，需要剔除不满足的情况
    for (const [key, count] of join) {
      const [u, v] = restoreKey(key);
      if (
        degree[u] + degree[v] > target && // 1. 已累加
        degree[u] + degree[v] - count <= target // 2. 但其实不满足
      ) {
        // 就剔除这种情况，即：方案数 - 1
        --res[i];
      }
    }
  }

  return res;
};

// [
//   [
//     4,
//     [[1,2],[2,4],[1,3],[2,3],[2,1]],
//     [2,3]
//   ],
//   [
//     5,
//     [[1,5],[1,5],[3,4],[2,5],[1,3],[5,1],[2,3],[2,5]],
//     [1,2,3,4,5]
//   ]
// ].forEach(A => {
//   console.log(countPairs(...A))
// });
