const DAYS = ["Thursday", "Friday", "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday"]
const DAYS_OF_MONTH = [0, 31, -1, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

/**
 * 随便找个pivot（比如：1970-1-1，星期四），计算相差天数
 */
var dayOfTheWeek = function(day, month, year) {
  const days = getDaysDiff(year, month, day, 1970, 1, 1)
  return DAYS[days % DAYS.length]
};

// 获取相差天数
function getDaysDiff (y1, m1, d1, y2, m2, d2) {
  let res = 0

  // 年
  for (let i = y2; i < y1; ++i) {
    if (isRunnian(i)) {
      res += 366
    } else {
      res += 365
    }
  }
  --res

  // 月
  for (let i = 1; i < m1; ++i) {
    if (i === 2) {
      res += (isRunnian(y1) ? 29 : 28)
    } else {
      res += DAYS_OF_MONTH[i]
    }
  }

  // 日
  res += d1

  return res
}

// 闰年
function isRunnian (year) {
  if (year % 100 === 0) {
    return year % 400 === 0
  } else {
    return year % 4 === 0
  }
}

[
  [31, 8, 2019],
  [18, 7, 1999],
  [15, 8, 1993],
].forEach(input => {
  console.log(dayOfTheWeek(...input))
})