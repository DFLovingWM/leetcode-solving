/**
 * 哈希表/数组 + 排序
 */
var highFive = function (items) {
  const id2Scores = new Map()
  for (const [id, score] of items) {
    if (!id2Scores.has(id)) {
      id2Scores.set(id, [])
    }
    id2Scores.get(id).push(score)
  }

  // 排序：分数降序
  for (const scores of id2Scores.values()) {
    scores.sort((a, b) => b - a)
  }

  const res = []
  for (const [id, scores] of id2Scores) {
    const aver = Math.floor(scores.slice(0, 5).reduce((a, b) => a + b, 0) / 5)
    res.push([id, aver])
  }
  return res
};

[
  [[1,91],[1,92],[2,93],[2,97],[1,60],[2,77],[1,65],[1,87],[1,100],[2,100],[2,76]]
].forEach(A => {
  console.log(highFive(A))
})