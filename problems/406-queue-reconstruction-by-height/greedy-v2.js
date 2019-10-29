/**
 * 从高到矮排序，然后依次插入
 * 
 * 时间：O(N^2), 100ms
 */
var reconstructQueue = function (people) {
  people = people.slice().sort((a, b) => b[0] - a[0] || a[1] - b[1]) // 排序：身高降序，K升序

  const n = people.length
  const queue = []

  for (const man of people) {
    queue.splice(man[1], 0, man)
  }

  return queue
};

module.exports = reconstructQueue