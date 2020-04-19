/**
 * 哈希
 */
var displayTable = function(orders) {
  const table = Array.from({ length: 501 }, () => new Map()); // table => food => count
  const tableSet = new Set();
  const foodSet = new Set();
  for (const [c, t, f] of orders) {
    const m = table[t];
    m.set(f, (m.get(f) || 0) + 1);
    tableSet.add(t);
    foodSet.add(f);
  }

  const res = [];
  // 首行
  const foods = [...foodSet].sort();
  res.push(['Table'].concat(foods));
  // 统计每一行
  const tables = [...tableSet].map(Number).sort((a, b) => a - b);
  for (const t of tables) {
    const row = [String(t)]; // 桌号
    const m = table[t];
    // 每道菜的数量
    for (const f of foods) {
      row.push(String(m.get(f) || 0));
    }
    res.push(row);
  }
  return res;
};

[
  [["David","3","Ceviche"],["Corina","10","Beef Burrito"],["David","3","Fried Chicken"],["Carla","5","Water"],["Carla","5","Ceviche"],["Rous","3","Ceviche"]],
  [["James","12","Fried Chicken"],["Ratesh","12","Fried Chicken"],["Amadeus","12","Fried Chicken"],["Adam","1","Canadian Waffles"],["Brianna","1","Canadian Waffles"]],
  [["Laura","2","Bean Burrito"],["Jhon","2","Beef Burrito"],["Melissa","2","Soda"]],
].forEach(A => {
  console.log(displayTable(A))
})