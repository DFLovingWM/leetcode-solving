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