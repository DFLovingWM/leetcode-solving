/**
 * 睡眠排序：利用系统的setTimeout函数，对每一个数字进行setTimeout，醒来时加入新数组，就得到有序数组。
 * 非常tricky，适用范围小，有以下特点：
 * 1. 非负数排序。因为setTimeout传入的时间值至少为0。
 * 2. 最大值不能太大。因为耗时取决于最大值。
 * 3. 数字不能太多。因为数量决定了定时器线程数。
 * 4. 接口是异步，不方便。
 */
async function sleepSorting (arr) {
  function sleep (n) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(n)
      }, n * 10)
    })
  }

  let results = []

  await Promise.all(arr.map(async n => {
    let N = await sleep(n)
    results.push(N)
  }))

  return results
}

function getRandomArr (length, lowerBound, upperBound) {
  let ret = []
  while (length--) {
    ret.push(Math.floor(Math.random() * (upperBound - lowerBound)) + lowerBound)
  }
  return ret
}

(async function main () {
  let sampleCount = 5
  while (sampleCount--) {
    const arr = getRandomArr(10, 0, 100)
    const sortedArr = await sleepSorting(arr)
    console.log('----------------------')
    console.log('排序前：', arr)
    console.log('排序后：', sortedArr)
  }
}) ()