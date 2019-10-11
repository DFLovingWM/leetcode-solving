/**
 * Fisher-Yates洗牌算法：
 * 已选出的放在左边，每次对右边随机抽取下标、并交换到左边
 * 
 * 时间：284ms
 * 空间：58.3MB
 */
var Solution = function (nums) {
  this.nums = nums
};

// O(1)
Solution.prototype.reset = function () {
  return this.nums
};

// O(N)
Solution.prototype.shuffle = function () {
  const n = this.nums.length
  const arr = this.nums.slice()
  for (let i = 0; i < n; ++i) {
    const index = rand(i, this.nums.length - 1) // 每次从剩下的[i, n-1]中选一个下标
    swap(arr, i, index)
  }
  return arr
};

function rand (min, max) {
  ++max
  return Math.floor(Math.random() * (max - min) + min)
}

function swap (arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]]
}