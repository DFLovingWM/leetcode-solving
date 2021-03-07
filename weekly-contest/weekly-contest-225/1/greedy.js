/**
 * 贪心尝试、并检测
 */
var maximumTime = function(time) {
  let [m, s] = [23, 59];
  while (m !== 0 || s !== 0) {
    const query = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
    if (isEqual(time, query)) {
      return query;
    }
    // 每一步，减1分钟
    if (s === 0) {
      --m;
      s = 59;
    } else {
      --s;
    }
  }
  return '00:00';
};

function isEqual(time, query) {
  for (let i = 0; i < time.length; ++i) {
    if (time[i] !== '?' && time[i] !== query[i]) {
      return false;
    }
  }
  return true;
}
