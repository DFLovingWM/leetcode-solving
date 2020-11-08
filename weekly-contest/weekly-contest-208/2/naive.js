/**
 * 模拟出轮数
 */
var minOperationsMaxProfit = function(customers, boardingCost, runningCost) {
  // 先算总人数
  const customerCount = customers.reduce((acc, e) => acc + e, 0);
  // 轮数
  let round = 0;
  // 目前这节车厢已有多少人
  let acc = 0;
  // 目前是第`i`群人
  let i = 0;

  // 转一下
  const run = () => {
    // 加1
    ++round;
    // 到站下车，目前车厢清空
    acc = 0;
  }

  while (true) {
    if (i === customers.length) break;
    
    // 如果下一群人还没来，则需要转
    if (round < i) {
      run();
      continue;
    }

    // 这节坐下`seat`个人
    const seat = Math.min(customers[i], 4 - acc);

    customers[i] -= seat;
    // 这群人OK了，到下一群人
    if (customers[i] === 0) {
      ++i;
    }

    acc += seat;
    // 车厢满，需要转一下，到下一个车厢（空）
    if (acc === 4) {
      ++round;
      // 到站下车了，所以人数清零
      acc = 0;
    }
  }
  ++round;

  // 计算收益
  const profit = customerCount * boardingCost - round * runningCost;
  if (profit < 0) return -1;
  return round;
};

[
  // [[8,3], 5, 6],
  // [[10,9,6], 6, 4],
  // [[3,4,0,5,1], 1, 92],
  [[1,1,1], 100, 1],
  [[10,10,6,4,7], 3, 8],
].forEach(A => {
  console.log(minOperationsMaxProfit(...A))
})