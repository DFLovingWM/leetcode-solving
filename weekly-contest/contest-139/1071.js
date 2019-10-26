var gcdOfStrings = function(a, b) {
  let start = getGCD(a.length, b.length)
  for (let i = start; i > 0; --i) {
    let aDivider = a.slice(0, i)
    let bDivider = b.slice(0, i)
    if (aDivider === bDivider && canDivide(aDivider, a) && canDivide(bDivider, b)) {
      return aDivider
    }
  }
  return ''
};

function getGCD (a, b) {
  return b === 0 ? a : getGCD(b, a % b)
}

function canDivide (sa, sb) {
  return sa.repeat(sb.length / sa.length) === sb
}

[
  ['ABCABC', 'ABC'],
  ['ABABAB', 'ABAB'],
  ['LEET', 'CODE']
].forEach(input => {
  console.log(gcdOfStrings(...input))
})
