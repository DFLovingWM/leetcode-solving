/**
 * 不断进行正则替换
 * 
 * 时间：2376ms
 */
var removeDuplicates = function(s, K) {
  let prev = s
  let curr
  const regexp = new RegExp(`([a-z])\\1{${K - 1}}`, 'g')

  while (true) { // 最多进行(N / K)次
    curr = prev.replace(regexp, '') // O(N + K)
    if (curr === prev) break
    prev = curr
  }

  return curr
};
