/**
 * 排序 + 线性查找
 * 
 * 时间：`O(NlogN + N * M^2)`, 180ms
 */
var suggestedProducts = function (products, searchWord) {
  products.sort() // 将产品按照字典序升序排序
  const results = []
  let prefix = ''

  for (const ch of searchWord) {
    prefix += ch
    const result = []

    for (const product of products) {
      if (product.startsWith(prefix)) {
        result.push(product)
        if (result.length === 3) break
      }
    }

    results.push(result)
  }

  return results
};

module.exports = suggestedProducts