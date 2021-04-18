/**
 * 数字母种类数，直接使用 Set
 */
 var checkIfPangram = function(sentence) {
  return new Set(sentence.split('')).size === 26;
};