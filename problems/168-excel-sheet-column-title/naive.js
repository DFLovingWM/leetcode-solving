/**
 * 26进制
 */
var convertToTitle = function(n) {
  let i;
  for (i = 1; Math.pow(26, i) > n; ++i) ;
  --i;

  let res = '';
  for (; n; --i) {
    getChar(Math.floor(n / 26));
  }
  return res;
};

function getChar(num) {
  return String.fromCharCode('A'.charCodeAt(0) - 1 + num);
}

[
  // 1,
  28,
  701,
].forEach(n => {
  console.log(convertToTitle(n))
})