/**
 * 水题：线性扫描并过滤就行
 * 
 * 时间：`O(N)`, 60ms
 */
var removeVowels = function (S) {
  let res = ''
  for (const ch of S) {
    if ('aeiou'.indexOf(ch) === -1) {
      res += ch
    }
  }
  return res
};

[
  'leetcodeisacommunityforcoders',
  'aeiou'
].forEach(s => {
  console.log(removeVowels(s))
})