/**
 * 模拟
 */
var toHexspeak = function (num) {
  const hex = Number(num).toString(16).toUpperCase()
  let res = ''
  for (const ch of hex) {
    if (ch === '0') {
      res += 'O'
    } else if (ch === '1') {
      res += 'I'
    } else if ('ABCDEF'.indexOf(ch) === -1) {
      return 'ERROR'
    } else {
      res += ch
    }
  }
  return res
};

[
  '257',
  '3',
  "892759744797",
].forEach(s => {
  console.log(toHexspeak(s))
})