/**
 * 贪心
 * 
 * 时间：O(NlogN), 108ms
 * 空间：O(N), 40.7MB
 */
var maxSumDivThree = function (nums) {
  let sum = 0;
  const mod = Array.from({ length: 3 }, () => []);
  for (const num of nums) {
    sum += num;
    mod[num % 3].push(num);
  }
  const residue = sum % 3; // 余数
  if (residue === 0) return sum;

  // 降序排序
  mod[1].sort((a, b) => b - a);
  mod[2].sort((a, b) => b - a);

  if (residue === 1) { // 余1 => 删去1个m1，或2个m2（取更小者）
    let min = Infinity;
    if (mod[1].length >= 1) min = Math.min(min, mod[1].pop());
    if (mod[2].length >= 2) min = Math.min(min, mod[2].pop() + mod[2].pop());
    sum -= min;
  } else { // 余2 => 删除1个m2，或2个m1（取更小者）
    let min = Infinity;
    if (mod[2].length >= 1) min = Math.min(min, mod[2].pop());
    if (mod[1].length >= 2) min = Math.min(min, mod[1].pop() + mod[1].pop());
    sum -= min;
  }
  return sum;
};