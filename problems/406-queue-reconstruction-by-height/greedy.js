/**
 * 从矮到高排序，然后依次放到正确的位置上
 * 
 * 时间：O(N^2), 116ms
 */
var reconstructQueue = function (people) {
  people = people.slice().sort((a, b) => a[0] - b[0]) // 排序：升序

  const n = people.length
  const queue = new Array(n).fill(null)

  for (let i = 0; i < n; ++i) {
    const man = people[i]
    let higher = 0

    for (let j = 0; j < n; ++j) {
      if (!queue[j] && higher === man[1]) { // 如果累计的前面更高者达到数量，并且这里是空位，就站在这里
        queue[j] = man
        break
      }
      if (!queue[j] || queue[j][0] === man[0]) ++higher
    }
  }

  return queue
};

module.exports = reconstructQueue