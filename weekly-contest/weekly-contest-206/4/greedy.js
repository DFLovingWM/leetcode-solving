/**
 * 贪心
 * 
 * 时间：O(10N) = O(N)
 */
var isTransformable = function(s, t) {
  const getIndex = Array.from({ length: 10 }, () => []);
  const n = s.length;

  for (let i = 0; i < n; ++i) {
    getIndex[s[i] - '0'].push(i);
  }

  for (let i = 0; i < n; ++i) {
    const e = t[i] - '0';

    // 如果e没有可用下标，就fail（说明s、t根本不匹配）
    if (getIndex[e].length === 0) {
      return false;
    }

    // “使用”该下标
    const ei = getIndex[e].shift();

    // 检查比e小的数字
    for (let j = 0; j < e; ++j) {
      // 如果存在一个比e小的数字j，它原本的位置ji更前
      // 那么无论再怎么局部排序，ji也不会跑到ei后面
      // 所以属于fail情况
      if (getIndex[j].length > 0 && getIndex[j][0] < ei) {
        return false;
      }
    }
  }
  return true;
};

[
  ['84532', '34852'],
  ['34521', '23415'],
  ['12345', '12435'],
  ['1', '2'],
].forEach(A => {
  console.log(isTransformable(...A))
})