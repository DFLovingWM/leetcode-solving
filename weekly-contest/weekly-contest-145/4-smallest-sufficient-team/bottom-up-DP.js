/**
 * Bottom-up DP(滚动数组) + 位压缩
 * 
 * 时间：`O(P * 2^R)`, 1396ms
 * 空间：137.5MB
 */
var smallestSufficientTeam = function (reqSkills, people) {
  // 将技能映射为数字
  const skill2Index = new Map()
  for (let i = 0; i < reqSkills.length; ++i) {
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

  // dp[s]表示前i个人中、技能为s的最小团队
  const P = people.length
  let currs = Array.from({ length: 1 << reqSkills.length }, () => Array.from({ length: P }, (_, i) => i))
  currs[0] = []
  for (let i = 0; i < P; ++i) {
    const nexts = currs.slice()
    for (let currSkill = (1 << reqSkills.length) - 1; currSkill >= 0; --currSkill) {
      const nextSkill = currSkill | people[i]
      if (currs[currSkill].length + 1 < nexts[nextSkill].length) {
        nexts[nextSkill] = currs[currSkill].concat(i)
      }
    }
    currs = nexts
  }

  return currs[(1 << reqSkills.length) - 1]
};

module.exports = smallestSufficientTeam