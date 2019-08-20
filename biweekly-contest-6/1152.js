/**
 * 数据统计，模拟过程即可：
 * - username作为key划分Map，并根据时间排序。
 * - 组合可以用三重循环，也可以用DFS。注意这里需要对组合去重。
 */
var mostVisitedPattern = function(usernames, timestamps, websites) {
  const records = []
  for (let i = 0; i < usernames.length; ++i) {
    const record = [usernames[i], timestamps[i], websites[i]]
    records.push(record)
  }
  records.sort((a, b) => a[1] - b[1]) // 按照时间排序

  const name2Websites = new Map()
  for (const [name, time, website] of records) {
    if (!name2Websites.has(name)) {
      name2Websites.set(name, [])
    }
    name2Websites.get(name).push(website)
  }

  const countMap = new Map()
  for (const [name, websites] of name2Websites.entries()) { // 对于每个用户
    for (const key of process3Websites(websites)) { // 遍历每个组合
      countMap.set(key, (countMap.get(key) || 0) + 1)
    }
  }

  // 最大次数
  const maxCount = Array.from(countMap.values()).reduce((res, item) => Math.max(res, item), 0)
  // 筛选出所有达到最大次数的record
  const candidates = Array.from(countMap.entries()).filter(([web, count]) => count === maxCount).map(([web, count]) => web.split(' '))
  // 找出字典序最小的那1个
  let target = candidates[0]
  for (const candidate of candidates) {
    if (!less(target, candidate)) {
      target = candidate
    }
  }
  return target
};

function getKey (...website) {
  return website.join(' ')
}

function process3Websites (websites) {
  const length =  websites.length
  const set = new Set()
  for (let i = 0; i < length; ++i) {
    for (let j = i + 1; j < length; ++j) {
      for (let k = j + 1; k < length; ++k) {
        const key = getKey(websites[i], websites[j], websites[k])
        set.add(key)
      }
    }
  }
  return Array.from(set)
}

function less (x, y) {
  return x[0] < y[0] || (x[0] === y[0] && x[1] < y[1]) || (x[0] === y[0] && x[1] === y[1] && x[2] < y[2])
}

[
  [
    ["joe","joe","joe","james","james","james","james","mary","mary","mary"],
    [1,2,3,4,5,6,7,8,9,10],
    ["home","about","career","home","cart","maps","home","home","about","career"]
  ],
  [
    ["u1","u1","u1","u2","u2","u2"],
    [1,2,3,4,5,6],
    ["a","b","c","a","b","a"]
  ],
  [
    ["h","eiy","cq","h","cq","txldsscx","cq","txldsscx","h","cq","cq"],
    [527896567,334462937,517687281,134127993,859112386,159548699,51100299,444082139,926837079,317455832,411747930],
    ["hibympufi","hibympufi","hibympufi","hibympufi","hibympufi","hibympufi","hibympufi","hibympufi","yljmntrclw","hibympufi","yljmntrclw"],
  ]
].forEach(input => {
  console.log('结果：', mostVisitedPattern(...input))
})
