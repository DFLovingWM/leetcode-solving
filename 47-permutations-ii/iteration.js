/**
 * 循环法：维护结果集
 * 
 * 时间：88ms
 */
var permuteUnique = function (nums) {
  let curr = [[]]

  for (const n of nums) { // 挑选数字`n`
    const next = []

    for (const tmp of curr) { // 遍历已有排列`tmp`
      for (let i = 0; i <= tmp.length; ++i) { // 遍历`n`可以插入`tmp`中的位置
        next.push([...tmp.slice(0, i), n, ...tmp.slice(i)])

        // 关键：避免重复！
        // 遇到与n相同的数字，之后的位置就放弃（以免与之后的排列重复）
        // 原理其实不知道怎么解释（@todo）
        if (i < tmp.length && tmp[i] === n) break
      }
    }

    curr = next
  }

  return curr
};

module.exports = permuteUnique