/**
 * 贪心
 * 
 * 时间：O(NlogN), 88ms
 * 空间：O(N), 39.1MB
 */
var largestMultipleOfThree = function(digits) {
  digits.sort((a, b) => b - a); // 降序排序

  const mod = Array.from({ length: 3 }, () => []);
  let sum = 0;
  for (const digit of digits) {
    mod[digit % 3].push(digit);
    sum += digit;
  }

  const residue = sum % 3;
  if (residue === 1) { // 余1 => 先考虑删除1个m1，再考虑删除2个m2
    if (mod[1].length >= 1) {
      mod[1].pop();
    } else {
      mod[2].pop();
      mod[2].pop();
    }
  } else if (residue === 2) { // 余2 => 先考虑删除1个m2，再考虑删除2个m1
    if (mod[2].length >= 1) {
      mod[2].pop();
    } else {
      mod[1].pop();
      mod[1].pop();
    }
  }
  
  let res = [...mod[0], ...mod[1], ...mod[2]];
  res.sort((a, b) => b - a); // 排序，使得最终数字最大

  // 删除前导0
  let i = 0;
  while (res[i] === 0) ++i;
  if (i === res.length) {
    if (res.length !== 0) { // 全部都是0 => 变为1个0
      res = [0];
    } else { // 一般情况
      res = res.slice(i);
    }
  }

  return res.join('');
};

module.exports = largestMultipleOfThree;