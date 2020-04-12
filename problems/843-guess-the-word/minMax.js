/**
 * 维护候选列表，并且每次选取侯选列表最小的那个方案（最小化最大值/minMax）
 * 
 * 时间：92ms
 */
var findSecretWord = function (words, master) {
  const n = words.length;
  let arr = [];

  for (let i = 0; i < n; ++i) {
    const word = words[i];
    let score = 0;
    for (let j = 0; j < n; ++j) {
      if (i !== j) {
        score += getScore(word, words[j]);
      }
    }
    arr.push([word, score]);
  }

  while (true) {
    // 找最大分数的单词来猜
    arr.sort((a, b) => b[1] - a[1]);
    const guess = arr[0][0];
    const count = master.guess(guess);
    if (count === 6) return guess;

    // 没猜中就继续：与`guess`的差值为result的都是候选值
    arr = arr.filter(e => getScore(e[0], guess) === count);
  }
};

// A、B匹配的下标数
function getScore(A, B) {
  let res = 0;
  for (let i = 0; i < A.length; ++i) {
    if (A[i] === B[i]) {
      ++res;
    }
  }
  return res;
}

module.exports = findSecretWord;