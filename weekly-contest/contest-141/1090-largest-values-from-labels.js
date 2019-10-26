/**
 * Sort + Map
 */
var largestValsFromLabels = function(values, labels, numWanted, useLimit) {

  function addLabelValue (label, value) {
    if (!mapFromLabel.has(label)) {
      mapFromLabel.set(label, [])
    }
    const targetArr = mapFromLabel.get(label)
    if (targetArr.length < useLimit) {
      targetArr.push(value)
    }
  }

  let length = values.length

  // 总体排序
  let kvs = []
  for (let i = 0; i < length; ++i) {
    kvs.push({
      label: labels[i],
      value: values[i]
    })
  }
  kvs.sort((a, b) => { // 从大到小
    if (a.value < b.value)
      return 1
    else if (a.value > b.value)
      return -1
    else
      return 0
  })

  // 以label为key，构建 Map
  // 对于每一个label，最多加入 useLimit 个值
  const mapFromLabel = new Map()
  for (let i = 0; i < length; ++i) {
    const { label, value } = kvs[i]
    addLabelValue(label, value)
  }

  // 取numWanted个最大值
  let result = 0
  while (numWanted--) {
    let maxLabel = undefined, maxValue = -Infinity
    for (const [label, values] of mapFromLabel.entries()) {
      if (values.length > 0 && (maxLabel === undefined || values[0] > maxValue)) {
        maxLabel = label
        maxValue = values[0]
      }
    }
    if (maxLabel !== undefined) {
      const targetArr = mapFromLabel.get(maxLabel)
      result += targetArr.shift()
    }
  }
  return result
};

[
  // [[5,4,3,2,1], [1,1,2,2,3], 3, 1],
  // [[5,4,3,2,1], [1,3,3,3,2], 3, 2],
  // [[9,8,8,7,6], [0,0,0,1,1], 3, 1],
  // [[9,8,8,7,6], [0,0,0,1,1], 3, 2],
  [[2,6,1,2,6], [2,2,2,1,1], 1, 1],
].forEach(input => {
  console.log(largestValsFromLabels(...input))
})
