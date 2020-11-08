/**
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */
var canFormArray = function(arr, pieces) {
  const hash = new Map();
  for (let i = 0; i < arr.length; ++i) {
    hash.set(arr[i], i);
  }

  for (const piece of pieces) {
    let ok = true;
    for (let i = 1; i < piece.length; ++i) {
      if (!hash.has(piece[i]) || !hash.has(piece[i - 1]) ||
        hash.get(piece[i]) < hash.get(piece[i - 1])) {
        ok = false;
        break;
      }
    }
    if (!ok) return false;
  }
  return true;
};