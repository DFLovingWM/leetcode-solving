/**
 * Top-down DP + 位压缩
 * 
 * 时间：`O(P * 2^R)`, 2680ms
 * 空间：344.8MB
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

  const cache = new Map()

  /**
   * 递归函数：当前是第`i`个人、已有`s`技能，最终能满足条件的最小团队
   * 对于第i个人，有“选/不选”2种策略
   * @param {number} i 第i个人
   * @param {number} s 当前已有技能的bitset
   */
  function helper (i, s) {
    if (i === people.length) {
      if ((s & rs) === rs) return [] // 满足了，就不需要增加人手了，返回空
      return Array.from({ length: people.length }, (_, i) => i) // 否则返回最大人数（表示不可能）
    }

    const key = `${i},${s}`
    if (cache.has(key)) return cache.get(key)

    const unchoose = [...helper(i + 1, s)] // 不选
    const choose = [i, ...helper(i + 1, s |= people[i])] // 选
    let res = unchoose.length < choose.length ? unchoose : choose
    cache.set(key, res)
    return res
  }

  return helper(0, 0)
};

module.exports = smallestSufficientTeam