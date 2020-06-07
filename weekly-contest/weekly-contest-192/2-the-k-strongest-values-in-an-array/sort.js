/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getStrongest = function(arr, k) {
  arr.sort((a, b) => a - b);
  const n = arr.length;
  const mid = arr[Math.floor((n - 1) / 2)];
  arr.sort((a, b) => {
    const distA = Math.abs(a - mid);
    const distB = Math.abs(b - mid);
    if (distA !== distB) {
      return distB - distA;
    }
    return b - a;
  });
  return arr.slice(0, k);
};