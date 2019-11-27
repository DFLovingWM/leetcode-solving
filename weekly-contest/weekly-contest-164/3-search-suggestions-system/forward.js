/**
 * 排序 + 递进查找：维护“开始搜索的位置”，它是递进的
 * 
 * 时间：`O(NlogN + NM)`, 156ms
 */
var suggestedProducts = function (products, searchWord) {
  products.sort() // 将产品按照字典序升序排序

  const results = []
  let prefix = ''

  for (const ch of searchWord) {
    prefix += ch
    const result = []
    let start = 0 // 开始搜索的位置（递进）

    for (let i = start; i < products.length; ++i) {
      if (products[i].startsWith(prefix)) {
        if (result.length === 0) {
          start = i
        }
        result.push(products[i])
        if (result.length === 3) break
      }
    }

    results.push(result)
  }

  return results
};

module.exports = suggestedProducts