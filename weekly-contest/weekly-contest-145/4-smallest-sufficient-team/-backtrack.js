/**
 * 回溯 + 位压缩
 */
var smallestSufficientTeam = function (reqSkills, people) {
  // 将技能映射为数字
  const skill2Index = new Map()
  let rs = 0
  for (let i = 0; i < reqSkills.length; ++i) {
    rs |= 1 << i
    skill2Index.set(reqSkills[i], i)
  }

  // 将人的技能转化为bitset
  people = people.map(man => {
    let bitset = 0
    for (const skill of man) {
      bitset |= 1 << skill2Index.get(skill)
    }
    return bitset
  })

  let res = Array.from({ length: people.length }, (_, i) => i)

  /**
   * 递归函数
   * @param {number} i 第i个人
   * @param {number} s 当前已有技能的bitset
   * @param {number} men 当前已选的人
   */
  function backtrack (i, s, men) {
    if ((rs & s) === rs) { // 当技能已经满足条件了，该分之可以提前返回（剪枝）
      if (men.length < res.length) res = men
      return
    }
    if (i === people.length) return // 最后还是不能满足，则本分支没有答案

    // 对于第i个人，有“选/不选”2种策略
    backtrack(i + 1, s, men) // 不选
    backtrack(i + 1, s |= people[i], men.concat(i)) // 选
  }

  backtrack(0, 0, [])
  return res
};

module.exports = smallestSufficientTeam