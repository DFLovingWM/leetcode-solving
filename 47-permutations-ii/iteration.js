/**
 * 迭代法：
 * - 用Set
 * - 不用Set，很6
 * 
 * 时间：124ms
 * 空间：37.6MB
 */
var permuteUnique = function(nums) {
  let curs = [[]]
  for (const num of nums) {
    let nexts = []
    for (const cur of curs) {
      for (let i = 0; i <= cur.length; ++i) { // `num`可插入的位置
        if (i > 0 && num === cur[i - 1]) {
          // 重点
          break
        }
        nexts.push(cur.slice(0, i).concat(num).concat(cur.slice(i)))
      }
    }
    curs = nexts
  }
  return curs
};

[
  [1,1,2]
].forEach(arr => {
  console.log(permuteUnique(arr))
})