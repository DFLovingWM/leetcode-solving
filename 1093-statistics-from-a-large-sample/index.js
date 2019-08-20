/**
 * 统计
 */
var sampleStats = function(count) {
  let min = Infinity,
      max = -Infinity,
      mean = 0,
      median = 0,
      mode
  let sum = 0,
      totalCount = 0,
      maxCount = 0

  for (let i = 0; i <= 255; ++i) {
    if (count[i] === 0) continue

    if (i < min) min = i
    if (i > max) max = i
    sum += i * count[i]
    totalCount += count[i]
    if (count[i] > maxCount) {
      maxCount = count[i]
      mode = i
    }
  }

  // 计算 mean
  mean = sum / totalCount

  // 找出 median
  let middleLeft = Math.ceil(totalCount / 2)
  let counter = 0
  for (let i = 0; i <= 255; ++i) {
    if (counter + count[i] >= middleLeft) {
      median = i // 中位数
      if (totalCount % 2 === 0 && counter + count[i] === middleLeft) { // 还要找第二个、并且数字不同
        let j = i + 1 // 从 i+1 开始寻找
        for (j; j <= 255; ++j) {
          if (count[j] > 0) {
            break
          }
        }
        median = (i + j) / 2
      }
      break
    } else {
      counter += count[i]
    }
  }

  return [toPrecision(min), toPrecision(max), toPrecision(mean), toPrecision(median), toPrecision(mode)]
};

function toPrecision (num, count = 5) {
  return num.toFixed(count)
}

[
  [0,1,3,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,4,3,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
].forEach(arr => {
  console.log(sampleStats(arr))
})
