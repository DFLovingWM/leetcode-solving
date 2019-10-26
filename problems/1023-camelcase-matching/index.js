/**
 * 规律：两个指针同时遍历即可
 */
var camelMatch = function (queries, pattern) {
  return queries.map(query => canMatch(query, pattern))
};

function canMatch (query, pattern) {
  let i = 0, j = 0
  for (i; i < query.length && j < pattern.length; ++i) {
    if (query[i] === pattern[j]) {
      ++j
    } else if (isUpperCase(query[i])) {
      return false
    }
  }
  if (j < pattern.length) return false
  if (hasUpperCase(query.slice(i))) return false
  return true
}

function isUpperCase (char) {
  return /^[A-Z]$/.test(char)
}

function hasUpperCase (string) {
  return /[A-Z]/.test(string)
}

[
  [["FooBar","FooBarTest","FootBall","FrameBuffer","ForceFeedBack"], 'FB'],
  [["FooBar","FooBarTest","FootBall","FrameBuffer","ForceFeedBack"], 'FoBa'],
  [["FooBar","FooBarTest","FootBall","FrameBuffer","ForceFeedBack"], 'FoBaT'],
  [["CompetitiveProgramming","CounterPick","ControlPanel"], "CooP"],
].forEach(input => {
  console.log(camelMatch(...input))
})
