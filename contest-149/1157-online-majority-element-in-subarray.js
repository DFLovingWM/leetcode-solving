/**
 * @param {number[]} arr
 */
var MajorityChecker = function(arr) {
  this.arr = arr
  this.answerMap = new Map()
};

/** 
 * @param {number} left 
 * @param {number} right 
 * @param {number} threshold
 * @return {number}
 */
MajorityChecker.prototype.query = function(left, right, threshold) {
  const key = getKey(left, right)

  if (this.answerMap.has(key)) {
    const { number, count } = this.answerMap.get(key)
    return count >= threshold ? number : -1
  }

  // Lazy counting
  let counts = new Map()
  let maxNumber, maxCount = 0
  for (let i = left; i <= right; ++i) {
    const number = this.arr[i]
    const count = (counts.get(number) || 0) + 1
    counts.set(number, count)
    if (count > maxCount) {
      maxNumber = number
      maxCount = count
    }
  }
  this.answerMap.set(key, {
    number: maxNumber,
    count: maxCount
  })
  return maxCount >= threshold ? maxNumber : -1
};

function getKey (left, right) {
  return left + ',' + right
}

/** 
 * Your MajorityChecker object will be instantiated and called as such:
 * var obj = new MajorityChecker(arr)
 * var param_1 = obj.query(left,right,threshold)
 */
let majorityChecker = new MajorityChecker([1,1,2,2,1,1]);
console.log(majorityChecker)
let a = majorityChecker.query(0,5,4); // returns 1
let b = majorityChecker.query(0,3,3); // returns -1
let c = majorityChecker.query(2,3,2); // returns 2
console.log(a, b, c)
