/**
 * 回溯（TLE）
 */
let res

var removeBoxes = function (boxes) {
  const arr = []
  let count = 1
  for (let i = 1; i < boxes.length; ++i) {
    if (boxes[i] == boxes[i - 1]) {
      ++count
    } else {
      arr.push([boxes[i - 1], count])
      count = 1
    }
  }
  arr.push([boxes[boxes.length - 1], count])

  res = 0
  backtrack(arr, 0)
  return res
};

function backtrack(arr, score) {
  if (arr.length === 0) {
    res = Math.max(res, score)
    return
  }

  for (let i = 0; i < arr.length; ++i) {
    const nextScore = score + arr[i][1] * arr[i][1]

    if (i === 0 || i === arr.length - 1) {
      backtrack([...arr.slice(0, i), ...arr.slice(i + 1)], nextScore)
    } else {
      if (arr[i - 1][0] === arr[i + 1][0]) { // 被删除的左右可以合并
        backtrack([...arr.slice(0, i - 1), [arr[i - 1][0], arr[i - 1][1] + arr[i + 1][1]], ...arr.slice(i + 2)], nextScore)
      } else {
        backtrack([...arr.slice(0, i), ...arr.slice(i + 1)], nextScore)
      }
    }
  }
}

module.exports = removeBoxes