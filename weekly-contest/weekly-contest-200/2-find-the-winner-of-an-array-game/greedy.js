/**
 * 模拟
 * O(N), 8084ms
 */
var getWinner = function(arr, k) {
  const win = new Map(); // 记录每个数字赢的次数

  // 模拟 n 次
  for (let i = 0; i < arr.length; ++i) {
    let winIndex, winNum, loseIndex, loseNum;
    if (arr[0] > arr[1]) {
      winIndex = 0;
      loseIndex = 1;
    } else {
      winIndex = 1;
      loseIndex = 0;
    }
    winNum = arr[winIndex];
    loseNum = arr[loseIndex];

    arr.splice(loseIndex, 1);
    arr.push(loseNum);

    const n = (win.get(winNum) || 0) + 1;
    if (n === k) {
      return winNum;
    }
    win.set(winNum, n);
    // console.log('win:', win)
  }

  // 还要继续，肯定是 max 取胜
  return Math.max(...arr);
};

/**
[2,1,3,5,4,6,7]
2
[3,2,1]
10
[1,9,8,2,3,7,6,4,5]
7
[1,11,22,33,44,55,66,77,88,99]
1000000000
 */