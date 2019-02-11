/**
 * @param {number[]} arr
 * @return {number}
 */
var maxTurbulenceSize = function (arr) {
  let maxLength = 1, length = 1
  let flag = null
  for (let i = 0; i < arr.length - 1; ++i) {
    let currFlag = getFlag(arr[i + 1], arr[i])

    if (flag === null || Math.abs(currFlag - flag) === 2) {
      flag = currFlag
      ++length
    } else {
      flag = null
      length = 1
      --i
    }

    // console.log('currFlag=', currFlag, '  length=', length)

    maxLength = Math.max(maxLength, length)
  }

  return maxLength
}

function getFlag (a, b) {
  if (a > b) {
    return 1
  } else if (a === b) {
    return 0
  } else {
    return -1
  }
}

// console.log( maxTurbulenceSize( [37,199,60,296,257,248,115,31,273,176]) )
// console.log( maxTurbulenceSize( [4,8,12,16]) )
// console.log( maxTurbulenceSize( [100]) )