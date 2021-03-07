/**
 * 频次
 */
var closeStrings = function(word1, word2) {
  if (word1.length !== word2.length) return false;

  const A = getFreq(word1);
  const B = getFreq(word2);

  // key集相同
  function isKeySameSet() {
    for (const k of A.keys()) {
      if (!B.has(k)) return false;
    }
    return true;
  }

  // value有序相同
  function isValueSameSeq() {
    return isSameArr(
      Array.from(A.values()).sort((a, b) => a - b),
      Array.from(B.values()).sort((a, b) => a - b)
    );
  }

  return isKeySameSet() && isValueSameSeq();
};

function getFreq(s) {
  const freq = new Map();
  for (const ch of s) {
    freq.set(ch, (freq.get(ch) || 0) + 1);
  }
  return freq;
}

function isSameArr(arr1, arr2) {
  // console.log(arr1, arr2)
  if (arr1.length !== arr2.length) return false;
  return arr1.every((e, i) => e === arr2[i]);
}