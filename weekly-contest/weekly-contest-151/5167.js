/**
 * @param {string[]} transactions
 * @return {string[]}
 */
var invalidTransactions = function(transactions) {
  const name2List = new Map()
  for (const transaction of transactions) {
    const [name, time, money, city] = transaction.split(',')
    if (!name2List.has(name)) {
      name2List.set(name, [])
    }
    name2List.get(name).push({
      name,
      money,
      time,
      city,
      full: transaction
    })
  }

  const invalid = new Set()

  for (const list of name2List.values()) {
    const tmp = []
    for (const transaction of list) {
      const { name, time, money, city, full } = transaction
      if (money > 1000) {
        tmp.push(full)
        continue
      }
      const peerIndex = list.findIndex(item => item.city !== city && Math.abs(item.time - time) <= 60)
      if (peerIndex !== -1) { // 冲突，将两个都加进去
        tmp.push(full)
        tmp.push(list[peerIndex].full)
      }
    }
    for (const t of tmp) invalid.add(t)
  }

  return Array.from(invalid)
};

[
  ["alice,20,800,mtv","alice,50,100,beijing"],
  ["alice,20,800,mtv","alice,50,1200,mtv"],
  ["alice,20,800,mtv","bob,50,1200,mtv"],
  ["bob,689,1910,barcelona","alex,696,122,bangkok","bob,832,1726,barcelona","bob,820,596,bangkok","chalicefy,217,669,barcelona","bob,175,221,amsterdam"],
  ["bob,627,1973,amsterdam","alex,387,885,bangkok","alex,355,1029,barcelona","alex,587,402,bangkok","chalicefy,973,830,barcelona","alex,932,86,bangkok","bob,188,989,amsterdam"],
].forEach(transactions => {
  console.log(invalidTransactions(transactions))
})
