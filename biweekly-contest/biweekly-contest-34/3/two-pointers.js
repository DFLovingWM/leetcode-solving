/**
 * 双指针（逆序对）
 * 
 * 时间：O(N)
 */
var findLengthOfShortestSubarray = function(arr) {
  // Edge case: 如果整体递增，则不用删除
  if (isUp(arr)) return 0;

  const n = arr.length;

  // 前缀的最右端
  let leftEnd = 0;
  while (arr[leftEnd + 1] >= arr[leftEnd]) {
    ++leftEnd;
  }

  // 后缀的最左端
  let rightStart = n - 1;
  while (arr[rightStart - 1] <= arr[rightStart]) {
    --rightStart;
  }

  // 双指针：
  // 类似于寻找逆序对的过程，总时间为O(N)
  let res = Math.min(n - 1 - leftEnd, rightStart); // 记录最小删除
  for (let i = 0, j = rightStart; i <= leftEnd; ++i) {
    // 递增、直到右边更大
    while (arr[j] < arr[i]) {
      ++j;
    }
    if (j >= n) break;
    res = Math.min(res, j - i - 1);
  }
  
  return res;
};

function isUp(arr) {
  for (let i = 1; i < arr.length; ++i) {
    if (arr[i] < arr[i - 1]) {
      return false;
    }
  }
  return true;
}

[
  [10, 1, 2, 3],
  [6,3,10,11,15,20,13,3,18,12],
].forEach(A => {
  console.log(findLengthOfShortestSubarray(A))
})
