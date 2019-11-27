/**
 * 排序 + 二分查找
 * 
 * 时间：`O(NlogN + M^2 * logN)`, 144ms
 */
var suggestedProducts = function (products, searchWord) {
  products.sort() // 将产品按照字典序升序排序
  const results = []
  let prefix = ''

  for (const ch of searchWord) {
    prefix += ch
    const result = []
    let i = bisectLeft(products, prefix, 0, products.length)
    for (i; i < products.length && result.length < 3; ++i) { // 寻找连续的3个
      if (products[i].startsWith(prefix)) {
        result.push(products[i])
      }
    }
    results.push(result)
  }

  return results
};

// O(MlogN)
function bisectLeft (arr, x, left, right) {
  while (left < right) {
    const mid = Math.floor((left + right) / 2)
    if (x <= arr[mid]) {
      right = mid
    } else {
      left = mid + 1
    }
  }
  return left
}

module.exports = suggestedProducts