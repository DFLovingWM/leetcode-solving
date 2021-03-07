/**
 * 贪心：排序 + 双指针
 */
var numRescueBoats = function(people, limit) {
  // 升序
  people.sort((a, b) => a - b);

  let res = 0;
  // left：目前最轻者
  // right：目前最重者
  let [left, right] = [0, people.length - 1];

  while (left <= right) {
    const sum = left === right
      ? people[left] // 重合(特殊情况)
      : people[left] + people[right];
    if (sum <= limit) { // 1、不超重，则2人一辆
      ++res;
      ++left;
      --right;
    } else { // 2、超重，则最重者单独一辆（最轻者放到下次考虑）
      ++res;
      --right;
    }
  }
  return res;
};
