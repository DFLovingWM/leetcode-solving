/**
 * 一次遍历即可
 */
var findOcurrences = function (text, first, second) {
  const tokens = text.split(' ')
  const res = []
  for (let i = 2; i < tokens.length; ++i) {
    if (tokens[i - 2] === first && tokens[i - 1] === second) {
      res.push(tokens[i])
    }
  }
  return res
};