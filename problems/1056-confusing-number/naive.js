const MAPPING = new Map([
  ['0', '0'],
  ['1', '1'],
  ['6', '9'],
  ['8', '8'],
  ['9', '6'],
])

function confusingNumber (number) {
  const A = String(number)
  let B = ''
  for (const ch of A) {
    if (!MAPPING.has(ch)) return false
    B = MAPPING.get(ch) + B
  }
  return A !== B
}

[
  6,
  89,
  11,
  25,
].forEach(n => {
  console.log(confusingNumber(n))
})