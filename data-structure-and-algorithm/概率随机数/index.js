function retrieve (valueList, probList, cnt) {
  let numbers = []
  while (cnt--) {
    let result = Math.random()
    let start = 0
    for (let i = 0; i < probList.length; ++i) {
      let end = start + probList[i]
      if (start <= result && result < end) {
        numbers.push(valueList[i])
      }
      start = end
    }
  }
  return numbers
}

// 验证
let sampleCount = 1000
let cnt = 3

let valueList = [0, 1, 2, 3]
let probList = [0.4, 0.2, 0.3, 0.1]

let count = {}

for (let i = 1; i <= sampleCount; ++i) {
  for (const result of retrieve(valueList, probList, cnt)) {
    if (count[result] === undefined) {
      count[result] = 0
    }
    ++count[result]
  }
}

for (const [key, value] of Object.entries(count)) {
  console.log(`数字：${key}，概率：${value / (sampleCount * cnt)}`)
}