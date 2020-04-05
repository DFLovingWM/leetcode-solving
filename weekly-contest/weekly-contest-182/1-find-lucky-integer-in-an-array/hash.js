/**
 * 频次
 */
var findLucky = function(arr) {
  const freq = Array.from({ length: 501 }, () => 0);
  for (const n of arr) {
    ++freq[n];
  }
  
  for (let i = 500; i >= 1; --i) {
    if (freq[i] === i) {
      return i;
    }
  }
  return -1;
};

// [
//   [2,2,3,4],
//   [1,2,2,3,3,3],
//   [2,2,2,3,3],
//   [5],
//   [7,7,7,7,7,7,7]
// ].forEach(A => {
//   console.log(findLucky(A))
// })