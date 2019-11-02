/**
 * 看作是有环链表，使用快慢指针
 */
var findDuplicate = function (nums) {
  let [slow, fast] = [0, 0]
  while (true) {
    fast = nums[nums[fast]]
    slow = nums[slow]
    if (fast === slow) break
  }

  slow = 0
  while (slow !== fast) {
    slow = nums[slow]
    fast = nums[fast]
  }
  return slow
};

module.exports = findDuplicate