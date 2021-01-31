/**
 * 图：简单的拓扑排序
 */
var restoreArray = function(adjacentPairs) {
  const next = new Map(); // Clinch: 邻接表
  for (const [a, b] of adjacentPairs) {
    if (!next.has(a)) {
      next.set(a, []);
    }
    next.get(a).push(b);

    if (!next.has(b)) {
      next.set(b, []);
    }
    next.get(b).push(a);
  }
  
  // 寻找起点(度为1)
  // 当然其实有2种可能：head/tail
  let start;
  for (const [k, v] of next) {
    if (v.length === 1) {
      start = k;
      break;
    }
  }

  // 找出链路
  const res = [start];
  const set = new Set([start]);
  while (set.size < next.size) {
    const prev = res[res.length - 1];
    for (const v of next.get(prev)) {
      if (!set.has(v)) {
        set.add(v);
        res.push(v);
        break;
      }
    }
  }

  return res;
};