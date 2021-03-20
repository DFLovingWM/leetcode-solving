type Index = number; // 结点
type Value = number; // 结点的值

// 栈
class Stack<T> {
  arr: Array<T>;

  constructor() {
    this.arr = [];
  }

  empty() {
    return this.arr.length === 0;
  }

  push(x: T) {
    this.arr.push(x);
  }

  pop() {
    return this.arr.pop();
  }

  top() {
    return this.arr[this.arr.length - 1];
  }
}

// 求邻接表
function getAdjacent(n: number, edges: Array<[Index, Index]>) {
  const res: Record<Index, Index[]> = Array.from({ length: n }, () => []);
  for (const [a, b] of edges) {
    res[a].push(b);
    res[b].push(a);
  }
  return res;
}

// 求互质
function getPrimeMap(max: number) {
  const map = new Map<Value, Value[]>();
  for (let i = 1; i <= max; ++i) {
    map.set(i, []);
    for (let j = 1; j <= max; ++j) {
      if (isRelativelyPrime(i, j)) {
        map.get(i).push(j);
      }
    }
  }
  return map;
}

// 是否互质
function isRelativelyPrime(a: number, b: number) {
  return gcd(a, b) === 1;
}

// 求最大公约数（辗转相除）
function gcd(x: number, y: number): number {
  return y === 0 ? x : gcd(y, x % y);
}

/**
 * DFS + 栈
 * 思路：https://leetcode-cn.com/problems/tree-of-coprimes/solution/hu-zhi-shu-xiang-jie-ti-mu-de-qie-ru-dia-poyw/
 */
function getCoprimes(nums: Value[], edges: Array<[Index, Index]>) {
  // 预处理（以下对象不会变）
  const max = 50;
  const primeMap = getPrimeMap(max);
  const n = nums.length;
  const adj = getAdjacent(n, edges);

  // 对于 1 ～ 50 每个数字都建立一个遍历 stack
  // 以下对象随着 DFS 过程变化，即始终表示当前状态
  const stacks: Record<Value, Stack<{ node: Index; level: number }>> =
    Array.from({ length: max + 1 }, () => new Stack());
  const res: Record<Index, Value> = Array.from({ length: n }, () => -1);

  // 递归函数
  function dfs(
    curr: Index,
    prev: Index,
    level: number
  ) {
    // 本结点对应的答案
    let nearest = {
      node: -1,
      level: -Infinity
    };
    // 从 1～50 中遍历所有互质的「祖先值」
    for (const num of primeMap.get(nums[curr]) || []) {
      const stack = stacks[num];
      if (!stack.empty()) {
        const top = stack.top(); // 对于某个数字，只关注栈顶，即「最近祖先」
        if (top.level > nearest.level) {
          nearest = top;
        }
      }
    }
    res[curr] = nearest.node;

    // 扩展子结点
    const currNumStack = stacks[nums[curr]];
    for (const next of adj[curr]) {
      if (next !== prev) { // 避免回头遍历
        currNumStack.push({ node: curr, level });
        dfs(next, curr, level + 1);
        currNumStack.pop();
      }
    }
  }

  dfs(0, -1, 0);
  return res;
}
