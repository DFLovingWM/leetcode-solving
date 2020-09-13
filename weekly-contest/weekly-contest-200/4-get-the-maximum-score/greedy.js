/**
 * 贪心：按照共同点切割，每次取更大的一段；注意特殊处理头尾
 * 
 * 时间：O(N), 236ms
 */
var maxSum = function(a1, a2) {
  const MOD = 1e9 + 7;

  const p1 = getPrefix(a1);
  const p2 = getPrefix(a2);

  // 共同结点集
  const s1 = new Set(a1);
  const s2 = new Set(a2);
  const s = new Set();
  for (const a of s1) {
    if (s2.has(a)) {
      s.add(a);
    }
  }
  const arr = [...s].sort((a, b) => a - b); // 升序
  arr.unshift(0); // dummy

  let res = 0;
  for (let i = 1; i < arr.length; ++i) {
    const curr = arr[i];
    const prev = arr[i - 1];
    res += Math.max(
      p1.get(curr) - p1.get(prev),
      p2.get(curr) - p2.get(prev)
    );
    res %= MOD;
  }
  res = res + Math.max(
    p1.get(a1[a1.length - 1]) - p1.get(arr[arr.length - 1]),
    p2.get(a2[a2.length - 1]) - p2.get(arr[arr.length - 1])
  );
  res %= MOD;
  return res;
};

function getPrefix(arr) {
  // res[i] = j，表示直到数字`i`，和为`j`
  const res = new Map();
  res.set(0, 0);
  let sum = 0;
  for (const num of arr) {
    sum += num;
    res.set(num, sum);
  }
  return res;
}

// [
//   [[2,4,5,8,10], [4,6,8,9]],
//   [[1,3,5,7,9], [3,5,100]],
//   [[1,2,3,4,5], [6,7,8,9,10]],
//   [[1,4,5,8,9,11,19], [2,3,4,11,12]],
// ].forEach(A => {
//   console.log(maxSum(...A))
// })