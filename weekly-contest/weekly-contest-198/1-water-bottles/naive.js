/**
 * 模拟
 * 
 * 时间：88ms
 */
var numWaterBottles = function(initial, exchange) {
  let res = 0;
  let empty = 0; // 空瓶子数
  let full = initial; // 满瓶子数

  while (full > 0) { // 只要还有酒，就继续
    // 喝完，都变成空瓶子
    res += full;
    empty += full;
    if (empty < exchange) break; // 如果不够换，就退出

    // 兑换，满瓶子增加
    full = Math.floor(empty / exchange);
    empty %= exchange;
  }

  return res;
};

[
  [9, 3],
  [15, 4],
  [5, 5],
  [2, 3],
].forEach(A => {
  console.log(numWaterBottles(...A))
})