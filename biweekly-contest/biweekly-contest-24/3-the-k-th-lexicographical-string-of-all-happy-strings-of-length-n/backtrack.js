/**
 * 回溯：数据量较小，可以求出所有happy串，然后排序找第k个
 */
var getHappyString = function(n, k) {
  --k;
  const arr = [];
    
  function backtrack(acc, prev) {
    if (acc.length === n) {
      arr.push(acc);
      return;
    }

    for (const letter of 'abc') {
      if (letter !== prev) {
        backtrack(acc + letter, letter);
      }
    }
  }

  backtrack('', '');
  if (k >= arr.length) return '';
  arr.sort();
  return arr[k];
};

[
  [1,3],
  [1,4],
  [3,9],
  [2,7],
  [10,100],
].forEach(A => {
  console.log(getHappyString(...A))
})