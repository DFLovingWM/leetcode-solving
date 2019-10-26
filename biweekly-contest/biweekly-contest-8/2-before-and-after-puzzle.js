function Value (value, index) {
  this.value = value
  this.index = index
}

/**
 * Map
 */
var beforeAndAfterPuzzles = function(phrases) {
  const head = new Map()
  const tail = new Map()

  for (let i = 0; i < phrases.length; ++i) {
    const phrase = phrases[i]

    const words = phrase.split(' ')
    const [first, last] = [words[0], words[words.length - 1]]

    if (!head.has(first)) head.set(first, [])
    head.get(first).push(new Value(phrase, i))

    if (!tail.has(last)) tail.set(last, [])
    tail.get(last).push(new Value(phrase, i))
  }

  let res = []
  for (const [t, as] of tail.entries()) {
    if (head.has(t)) {
      for (const b of head.get(t)) {
        for (const a of as) {
          if (a.index !== b.index) {
            res.push(join(a.value, b.value))
          }
        }
      }
    }
  }
  // 排序
  res.sort((a, b) => {
    if (a < b) {
      return -1
    } else if (a > b) {
      return 1
    } else {
      return 0
    }
  })
  // 去重
  res = Array.from(new Set(res))
  return res
};

// 连接2个短语
function join (a, b) {
  a = a.split(' ')
  b = b.split(' ')
  return a.concat(b.slice(1)).join(' ')
}

[
  ["writing code","code rocks"],
  ["mission statement",
    "a quick bite to eat",
    "a chip off the old block",
    "chocolate bar",
    "mission impossible",
    "a man on a mission",
    "block party",
    "eat my words",
    "bar of soap"],
    ["a","b","a"],
].forEach(arr => {
  console.log(beforeAndAfterPuzzles(arr))
})