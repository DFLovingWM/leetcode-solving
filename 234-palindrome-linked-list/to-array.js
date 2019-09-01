/**
 * 转化为数组，就可以自由访问，然后用双指针进行头尾比对
 * T(N), S(N)
 */
var isPalindrome = function(head) {
  const arr = []
  while (head) {
    arr.push(head.val)
    head = head.next
  }
  
  let L = 0, R = arr.length - 1
  while (L < R) {
    if (arr[L] !== arr[R]) {
      return false
    }
    ++L
    --R
  }
  return true
};
