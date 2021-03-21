// 结点
function BinaryTrieNode() {
  this.next = Array.from({ length: 2 }, () => null); // 0 / 1
  this.count = 0;
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
      ++p.count;
    }
  }

  countLower(_curr, _pivot) {
    const curr = toBinaryArr(_curr);
    const pivot = toBinaryArr(_pivot);
    let p = this.root;
    let res = 0;

    for (let i = 0; i < 32 && p; ++i) {
      const result0 = curr[i];
      const result1 = 1 - curr[i];
      if (pivot[i] === 1) { // pivot == 1 时，可以走所有结果为 0 的路，然后继续走结果为 1
        res += p.next[result0] ? p.next[result0].count : 0;
        p = p.next[result1];
      } else { // pivot == 0 时，只能走结果为 0
        p = p.next[result0];
      }
    }

    return res;
  }

  countHigher(_curr, _pivot) {
    const curr = toBinaryArr(_curr);
    const pivot = toBinaryArr(_pivot);
    let p = this.root;
    let res = 0;

    for (let i = 0; i < 32 && p; ++i) {
      const result0 = curr[i];
      const result1 = 1 - curr[i];
      if (pivot[i] === 0) { // pivot == 0 时，可以走所有结果为 1 的路，然后继续走结果为 0
        res += p.next[result1] ? p.next[result1].count : 0;
        p = p.next[result0];
      } else { // pivot == 1 时，只能走结果为 1
        p = p.next[result1];
      }
    }

    return res;
  }
}

/**
 * 0/1 前缀树
 */
var countPairs = function(nums, low, high) {
  const t = new BinaryTrieTree();
  for (const num of nums) {
    t.add(num);
  }

  let res = 0;
  const n = nums.length;
  for (const num of nums) {
    res += (n - t.countLower(num, low) - t.countHigher(num, high));
  }
  // 两两配对会重复，所以需要减半
  return res / 2;
};

[
  [
    [1,4,2,7],
    2,
    6
  ],
  [
    [9,8,4,2,1],
    5,
    14
  ],
].forEach(A => {
  console.log(countPairs(...A))
})