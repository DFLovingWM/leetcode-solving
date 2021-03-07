/**
 * 模拟
 */
var averageWaitingTime = function(customers) {
  let sum = 0;
  let prev = -1;
  for (const [start, cost] of customers) {
    if (start > prev) {
      prev = start + cost;
      sum += cost;
    } else {
      prev += cost;
      sum += prev - start;
    }
  }
  return sum / customers.length;
};