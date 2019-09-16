// 一般
const DIGIT = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
}

// 特殊
const SPECIAL = {
  'IV': 4,
  'IX': 9,
  'XL': 40,
  'XC': 90,
  'CD': 400,
  'CM': 900
}

var romanToInt = function(s) {
  let res = 0
  for (let i = 0; i < s.length; ++i) {
    // 判断是否有特殊
    if (i + 1 < s.length && SPECIAL.hasOwnProperty(s[i] + s[i + 1])) {
      res += SPECIAL[s[i] + s[i + 1]]
      ++i
      continue
    }

    // 一般情况
    res += DIGIT[s[i]]
  }
  return res
};

[
  'III',
  'IV',
  'IX',
  'LVIII',
  'MCMXCIV',
].forEach(s => {
  console.log(romanToInt(s))
})