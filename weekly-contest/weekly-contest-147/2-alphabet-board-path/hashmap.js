/**
 * 建立映射：字母 => 坐标。字母`z`需要特殊处理
 */
var alphabetBoardPath = function (targetStr) {
  const co = new Map()
  for (let i = 0; i < 26; ++i) {
    const letter = String.fromCharCode('a'.charCodeAt(0) + i)
    const x = Math.floor(i / 5)
    const y = i % 5
    co.set(letter, [x, y])
  }

  function getPath (fromChar, toChar) {
    const [x1, y1] = co.get(fromChar)
    const [x2, y2] = co.get(toChar)
    const ve = x2 > x1 ? 'D' : 'U'
    const ho = y2 > y1 ? 'R' : 'L'

    if (fromChar === 'z') { // 如果从z出发，一定先走竖直方向
      return ve.repeat(Math.abs(x2 - x1)) + ho.repeat(Math.abs(y2 - y1))
    } else if (toChar === 'z') { // 如果到达z，一定后走竖直方向
      return ho.repeat(Math.abs(y2 - y1)) + ve.repeat(Math.abs(x2 - x1))
    } else { // 一般情况，随便
      return ve.repeat(Math.abs(x2 - x1)) + ho.repeat(Math.abs(y2 - y1))
    }
  }

  let curr = 'a' // 从a出发
  let res = ''
  for (const next of targetStr) {
    res += getPath(curr, next) + '!'
    curr = next
  }

  return res
};

[
  'leet',
  'code',
  "zdz",
].forEach(s => {
  console.log(alphabetBoardPath(s))
})