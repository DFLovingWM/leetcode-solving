/**
 * Simple question. Use 'HashMap' to record:
 * - count
 * - left index
 * - right index
 * And then find the min range of number which has the max count.
 * 
 * Time: [84ms]
 * Memory: [19.8MB]
 */
function findShortestSubArray (nums) {
  let map = new Map()

  for (let i = 0; i < nums.length; ++i) {
    const num = nums[i]
    if (!map.has(num)) {
      map.set(num, new Record(0, i, i))
    }
    const record = map.get(num)
    ++record.count
    record.right = i
  }

  let maxCount = -Infinity, minLength = Infinity
  for (const { count, left, right } of map.values()) {
    if (count > maxCount) {
      maxCount = count
      minLength = right - left + 1
    } else if (count === maxCount) {
      minLength = Math.min(minLength, right - left + 1)
    }
  }

  return minLength
}

function Record (count, left, right) {
  this.count = count
  this.left = left
  this.right = right
}

module.exports = findShortestSubArray