/**
 * 求和
 * 
 * 时间：O(N)
 */
var decode = function(encoded) {
  const n = encoded.length + 1;

  // 1～N的排列，所以XOR之和是隐藏条件
  const sum = Array
    .from({ length: n }, (_, i) => i + 1)
    .reduce((acc, e) => acc ^ e, 0);

  // 求head
  let head = sum;
  for (let i = 1; i < encoded.length; i += 2) {
    head ^= encoded[i];
  }

  // 推导出剩下的每一项
  const res = [head];
  for (const xor of encoded) {
    res.push(res[res.length - 1] ^ xor);
  }

  return res;
};