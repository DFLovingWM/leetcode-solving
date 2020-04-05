/**
 * Hash
 */
var UndergroundSystem = function () {
  this.id2Last = new Map(); // id => [stationName, t]（上次行程）
  this.data = new Map(); // [start, end] => [sum, count]
};

UndergroundSystem.prototype.checkIn = function (id, stationName, t) {
  this.id2Last.set(id, [stationName, t]);
};

UndergroundSystem.prototype.checkOut = function (id, stationName, t) {
  const [start, t0] = this.id2Last.get(id);
  this.id2Last.delete(id);
  const key = getKey(start, stationName);
  if (!this.data.has(key)) { // 还没有过行程，需要初始化
    this.data.set(key, [0, 0]);
  }
  const [sum, count] = this.data.get(key);
  this.data.set(key, [sum + t - t0, count + 1]);
};

UndergroundSystem.prototype.getAverageTime = function (startStation, endStation) {
  const key = getKey(startStation, endStation);
  const [sum, count] = this.data.get(key);
  return sum / count;
};

function getKey(startStation, endStation) {
  return startStation + endStation
}

// const undergroundSystem = new UndergroundSystem();
// undergroundSystem.checkIn(45, "Leyton", 3);
// undergroundSystem.checkIn(32, "Paradise", 8);
// undergroundSystem.checkIn(27, "Leyton", 10);
// undergroundSystem.checkOut(45, "Waterloo", 15);
// undergroundSystem.checkOut(27, "Waterloo", 20);
// undergroundSystem.checkOut(32, "Cambridge", 22);
// undergroundSystem.getAverageTime("Paradise", "Cambridge");       // 返回 14.0。从 "Paradise"（时刻 8）到 "Cambridge"(时刻 22)的行程只有一趟
// undergroundSystem.getAverageTime("Leyton", "Waterloo");          // 返回 11.0。总共有 2 躺从 "Leyton" 到 "Waterloo" 的行程，编号为 id=45 的乘客出发于 time=3 到达于 time=15，编号为 id=27 的乘客于 time=10 出发于 time=20 到达。所以平均时间为 ( (15-3) + (20-10) ) / 2 = 11.0
// undergroundSystem.checkIn(10, "Leyton", 24);
// undergroundSystem.getAverageTime("Leyton", "Waterloo");          // 返回 11.0
// undergroundSystem.checkOut(10, "Waterloo", 38);
// undergroundSystem.getAverageTime("Leyton", "Waterloo");          // 返回 12.0