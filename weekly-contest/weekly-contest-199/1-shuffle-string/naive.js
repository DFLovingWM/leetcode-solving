/**
 * 朴素
 */
var restoreString = function(s, indices) {
  const res = new Array(s.length);
  for (let i = 0; i < indices.length; ++i) {
    res[indices[i]] = s[i];
  }
  return res.join('');
};