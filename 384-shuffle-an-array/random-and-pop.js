/**
 * 每次随机抽取下标并取出一个
 * 
 * 时间：292ms
 * 空间：57.7MB
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
  const res = []
  const nums = this.nums.slice()
  while (nums.length > 0) {
    const i = Math.floor(Math.random() * nums.length)
    // 将其交换到最后，再弹出
    swap(nums, i, nums.length - 1)
    res.push(nums.pop())
  }
  return res
};

function swap (arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]]
}