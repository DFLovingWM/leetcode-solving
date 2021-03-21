// 结点
function BinaryTrieNode() {
  this.next = Array.from({ length: 2 }, () => null); // 0 / 1
  this.value = 0;
}

// 将整数转化为「32位二进制」形式
function toBinaryArr(num) {
  return num
    .toString(2)
    .padStart(32, '0')
    .split('')
    .map(Number);
}

// 树
class BinaryTrieTree {
  constructor() {
    this.root = new BinaryTrieNode();
  }

  // 添加数字
  add(num) {
    let p = this.root;
    for (const i of toBinaryArr(num)) {
      if (!p.next[i]) {
        p.next[i] = new BinaryTrieNode();
      }
      p = p.next[i];
    }
    p.value = num;
  }

  // 在树中寻找与 curr 异或后达到最大的元素
  getMaxXor(curr) {
    let p = this.root;
    for (const i of toBinaryArr(curr)) {
      if (p.next[1 - i]) { // 路径尽量相反
        p = p.next[1 - i];
      } else if (p.next[i]) {
        p = p.next[i];
      } else {
        return -1; // 不存在
      }
    }
    return curr ^ p.value;
  }
}

// ============================================================

function State(index, query) {
  this.index = index; // 记录 query 原来的下标
  this.query = query;
}

/**
 * 0/1 前缀树 + 离线算法
 * TODO: 不知道为啥最后两个用例报内存错误
 */
var maximizeXor = function(nums, queries) {
  // 升序
  nums.sort((a, b) => a - b);
  const Q = queries.length;

  // 离线思想：
  // 将 queries 排序，先处理更小的 mi
  // 这样可以逐渐「增加」元素到树上
  const newQueries = queries
    .map((query, index) => new State(index, query))
    .sort((sa, sb) => sa.query[1] - sb.query[1])

  const res = Array.from({ length: Q }, () => -1);
  const tree = new BinaryTrieTree();
  let j = 0; // 下标，用于遍历 nums

  for (const { index, query: [xi, mi] } of newQueries) {
    // 一直添加数字，直到 mi
    while (j < nums.length && nums[j] <= mi) {
      tree.add(nums[j]);
      ++j;
    }
    // 检查最大值
    res[index] = tree.getMaxXor(xi);
  }

  return res;
};

[
  [
    [0,1,2,3,4],
    [[3,1],[1,3],[5,6]]
  ],
  [
    [5,2,4,6,6,3],
    [[12,4],[8,1],[6,3]]
  ]
].forEach(A => {
  console.log(maximizeXor(...A))
})