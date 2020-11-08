/**
 * 字符串处理
 */
var reorderSpaces = function(text) {
  const n = text.length;

  const tokens = [];
  let acc = text[0];
  let space = text[0] === ' ' ? 1 : 0;
  for (let i = 1; i < n; ++i) {
    const ch = text[i];
    if (ch === ' ') ++space;
    if (canMerge(ch, acc[0])) {
      acc += ch;
    } else {
      tokens.push(acc);
      acc = ch;
    }
  }
  tokens.push(acc);

  const allSpaceRE = /^ +$/;
  const words = tokens.filter(token => !allSpaceRE.test(token));
  const margin = words.length - 1;
  // 特殊情况
  if (margin === 0) {
    return words[0] + ' '.repeat(space);
  }
  const a = Math.floor(space / margin);
  const b = space % margin;
  return words.join(' '.repeat(a)) + ' '.repeat(b);
};

function canMerge(a, b) {
  if (a === ' ' && b === ' ') return true;
  return a !== ' ' && b !== ' ';
}

[
  "  hello"
].forEach(s => {
  console.log(reorderSpaces(s))
})