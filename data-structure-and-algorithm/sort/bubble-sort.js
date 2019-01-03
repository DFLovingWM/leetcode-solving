/**
 * 冒泡排序：每次两两比较、交换，冒出最大值。依次循环N次
 * （正因为写法上看起来只是个简单二重循环，所以我认为它不应该让入门者首先接触）
 */
function bubbleSort (arr) {
  for (let bubbleCount = 1; bubbleCount <= arr.length; ++bubbleCount) {
    for (let i = 0; i < arr.length - bubbleCount; ++i) {
      if (arr[i] > arr[i + 1]) {
        [ arr[i], arr[i + 1] ] = [ arr[i + 1], arr[i] ]
      }
    }
  }

  return arr
}

module.exports = bubbleSort