/**
 * 分类讨论，双指针
 */
var checkPalindromeFormation = function(a, b) {
  const n = a.length;
  
  // 一次尝试
  function run(prefix, suffix) {
    let [i, j] = [0, n - 1];
    while (i < j) {
      if (prefix[i] !== suffix[j]) {
        return isPalindrome(prefix.slice(i, j + 1)) ||
          isPalindrome(suffix.slice(i, j + 1));
      }
      ++i;
      --j;
    }
    return true;
  }

  return run(a, b) || run(b, a) || run(a, a) || run(b, b);
};

function isPalindrome(s) {
  const n = s.length;
  let [i, j] = [0, n - 1];
  while (i < j) {
    if (s[i] !== s[j]) return false;
    ++i;
    --j;
  }
  return true;
}

module.exports = checkPalindromeFormation;
