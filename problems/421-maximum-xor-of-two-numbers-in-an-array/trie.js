// 结点
function BinaryTrieNode() {
  this.num = -1;
  this.next = Array.from({ length: 2 }, () => null); // 0 / 1  
}

// 树
class BinaryTrieTree {
  constructor() {
    this.root = new BinaryTrieNode();
  }

  // 添加数字
  add(num) {
    let p = this.root;
    for (const i of this._toBinaryArr(num)) {
      if (!p.next[i]) {
        p.next[i] = new BinaryTrieNode();
      }
      p = p.next[i];
    }
    p.num = num;
  }

  // 获取路径「尽可能相反」的数字
  getOpposite(num) {
    let p = this.root;
    for (const i of this._toBinaryArr(num)) {
      if (p.next[1 - i]) { // 优先走相反的
        p = p.next[1 - i];
      } else {
        p = p.next[i];
      }
    }
    return p.num;
  }

  // 将整数转化为「32位二进制」形式
  _toBinaryArr(num) {
    return num
      .toString(2)
      .padStart(32, '0')
      .split('')
      .map(Number);
  }
}

/**
 * 二进制Trie树
 * 
 * 时间：O(N), 936ms
 */
var findMaximumXOR = function(nums) {
  const trie = new BinaryTrieTree();
  for (const num of nums) {
    trie.add(num);
  }
  
  let res = 0;
  for (const num of nums) {
    const tmp = num ^ trie.getOpposite(num);
    res = Math.max(res, tmp);
  }
  return res;
};