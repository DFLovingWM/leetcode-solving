/**
 * 将数组转化为堆
 */
function heapify (arr, comparator) {
  let heap = []
  for (const item of arr) {
    heapPush(heap, item, comparator)
  }
  return heap
}

/**
 * 将新元素插入堆，并维护堆的不变性
 */
function heapPush (heap, item, comparator) {
  // 尾部加入
  heap.push(item)

  // 调整堆（新元素在尾部，所以是bottom-up）
  let cur = heap.length - 1
  while (cur > 0) { // 只要不是root（就有parent需要比较）
    let parent = Math.floor((cur - 1) / 2)
    if (comparator(heap[cur], heap[parent])) { // 满足上位条件
      swap(heap, parent, cur)
      cur = parent
    } else {
      break
    }
  }
}

/**
 * 弹出最小元素，并维护堆的不变性
 */
function heapPop (heap, comparator) {
  // 头尾元素交换，为的是让最小元素从尾巴弹出
  swap(heap, 0, heap.length - 1)
  const result = heap.pop()

  // 调整堆（新元素在头部，所以是top-down）
  let cur = 0
  while (true) {
    let left = cur * 2 + 1
    let right = left + 1

    // 注：这个条件分支安排得非常完美！
    if (right < heap.length && comparator(heap[right], heap[cur]) && comparator(heap[right], heap[left])) { // 如果右子结点存在、并且满足上位条件
      swap(heap, right, cur)
      cur = right
    } else if (left < heap.length && comparator(heap[left], heap[cur])) { // (这个分支可以不考虑右子结点了)如果左子结点存在、并且满足上位条件
      swap(heap, left, cur)
      cur = left
    } else { // (这个分支可以不考虑右、左子结点了)
      break
    }
  }

  return result
}

function swap (arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]]
}

// 优先级队列
class PriorityQueue {
  constructor (comparator) {
    this.heap = []
    // 比较函数，默认为小顶堆
    this.comparator = comparator || function (a, b) {
      return a < b
    }
  }

  size () {
    return this.heap.length
  }

  empty () {
    return this.size() === 0
  }

  init (arr) {
    heapify(arr, this.comparator)
  }

  // 插入元素，并维护堆
  add (n) {
    heapPush(this.heap, n, this.comparator)
  }

  // 查看顶元素
  peek () {
    if (this.heap.length === 0) return NONE
    return this.heap[0]
  }

  // 推出顶元素，并维护堆
  poll () {
    if (this.heap.length === 0) return NONE
    return heapPop(this.heap, this.comparator)
  }
}

// ========================= 以上是优先级队列的实现 =============================

/**
 * 思路：
 * 1. Dijkstra(堆优化)求出dist
 * 2. DP
 */
var countRestrictedPaths = function(n, edges) {
  // 邻接表
  const adj = Array.from({ length: n + 1 }, () => []);
  for (const [a, b, w] of edges) {
    adj[a].push([b, w]);
    adj[b].push([a, w]);
  }
  // 从终点出发进行Dijkstra
  const dist = dijkstra(n, adj, n);
  // DP求路径数
  return bottomUpDP(n, dist, adj, 1, n);
};

function State(vertex, weight) {
  this.vertex = vertex;
  this.weight = weight;
}

function dijkstra(n, adj, start) {
  const dist = Array.from({ length: n + 1 }, () => Infinity);
  const queue = new PriorityQueue((A, B) => A.weight < B.weight); // Priority<State>

  dist[start] = 0;
  queue.add(new State(start, 0));

  while (!queue.empty()) {
    const { vertex: u, weight } = queue.poll();
    if (dist[u] < weight) {
      continue;
    }
    for (const [v, w] of adj[u]) {
      const d = dist[u] + w;
      if (d < dist[v]) {
        dist[v] = d;
        queue.add(new State(v, d));
      }
    }
  }

  return dist;
}

// 方式1：Top-down DP
function topDownDP(n, dist, adj, start, end) {
  // DP：路径数
  const dp = Array.from({ length: n + 1 }, () => -1);
  const MOD = 1e9 + 7;

  function f(i) {
    if (i === end) {
      return 1;
    }

    if (dp[i] !== -1) {
      return dp[i];
    }

    let res = 0;
    for (const [j] of adj[i]) {
      if (dist[j] < dist[i]) {
        res += f(j);
        res %= MOD;
      }
    }
    return dp[i] = res;
  }

  return f(start);
}

// 方式2: Bottom-up DP
function bottomUpDP(n, dist, adj, start, end) {
  const dp = Array.from({ length: n + 1 }, () => 0);
  dp[end] = 1;
  // 按照 dist 升序排序
  const arr = Array
    .from({ length: n }, (_, i) => i + 1)
    .sort((i, j) => dist[i] - dist[j]);
  arr.shift();
  // DP拓扑序：从 dist 最小的开始
  for (const u of arr) {
    for (const [v, w] of adj[u]) {
      if (dist[u] > dist[v]) {
        dp[u] += dp[v];
        dp[u] %= (1e9 + 7);
      }
    }
    // 提前结束（答案已经求出，后面的可以不管了）
    if (u === start) {
      break;
    }
  }
  return dp[start];
}

[
  [5, [[1,2,3],[1,3,3],[2,3,1],[1,4,2],[5,2,2],[3,5,1],[5,4,10]]],
  [7, [[1,3,1],[4,1,2],[7,3,4],[2,5,3],[5,6,1],[6,7,2],[7,5,3],[2,6,4]]],
].forEach(A => {
  console.log( countRestrictedPaths(...A) )
});