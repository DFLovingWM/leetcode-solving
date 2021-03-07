const minutes = [8, 4, 2, 1];
const seconds = [32, 16, 8, 4, 2, 1];

// 求和
function sum(set) {
  return [...set].reduce((acc, e) => acc + e, 0);
}

// 判断时间是否有效
function isValid(minute, second) {
  return minute <= 11 && second <= 59;
}

// 将时间转化为字符串格式 mm:ss
function toStr(minute, second) {
  return `${minute}:${String(second).padStart(2, '0')}`;
}

/**
 * 2128ms
 */
var readBinaryWatch = function(N) {
  const res = new Set();

  // 定义递归函数
  function backtrack(minuteSet, secondSet) {
    // 叶子结点
    if (minuteSet.size + secondSet.size === N) {
      const m = sum(minuteSet);
      const s = sum(secondSet);
      if (isValid(m, s)) {
        res.add(toStr(m, s));
      }
      return;
    }

    // 如果这一步取的是“分”所在的灯
    for (const minute of minutes) {
      if (!minuteSet.has(minute)) {
        // 前进
        minuteSet.add(minute);
        backtrack(minuteSet, secondSet);
        // 回头
        minuteSet.delete(minute);
      }
    }
    // 如果取的是“秒”，则同上
    for (const second of seconds) {
      if (!secondSet.has(second)) {
        secondSet.add(second);
        backtrack(minuteSet, secondSet);
        secondSet.delete(second);
      }
    }
  }

  backtrack(new Set(), new Set());
  return Array.from(res);
};
