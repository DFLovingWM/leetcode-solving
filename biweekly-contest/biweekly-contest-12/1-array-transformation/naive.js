/**
 * 暴力
 */
var transformArray = function (arr) {
  let change = true

  while (change) {
    change = false
    let next = arr.slice()

    for (let i = 1; i < arr.length - 1; ++i) {
      if (arr[i] < arr[i - 1] && arr[i] < arr[i + 1]) {
        ++next[i]
        change = true
      } else if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
        --next[i]
        change = true
      }
    }

    arr = next
  }

  return arr
};

[
  [6, 2, 3, 4],
  [1, 6, 3, 4, 3, 5],
].forEach(arr => {
  console.log(transformArray(arr))
})