/**
 * 类似于进制计算：月份所含天数 + 本月中过去的天数
 * 另有对闰年的判断
 */
var dayOfYear = function(date) {
  const [year, month, day] = date.split('-').map(Number)
  let result = 0
  const days = [-1, 31, -1, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

  for (let m = 1; m < month; ++m) {
    if (m === 2) { // 2月份的天数，特殊处理
      if ((year % 100 === 0 && year % 400 === 0) || (year % 100 !== 0 && year % 4 === 0)) { // 闰年
        result += 29
      } else {
        result += 28
      }
    } else {
      result += days[m]
    }
  }

  result += day

  return result
};
