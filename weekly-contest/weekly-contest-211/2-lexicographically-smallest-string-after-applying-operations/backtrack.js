/**
 * 回溯
 */
var findLexSmallestString = function(s, a, b) {
  const set = new Set();
  
  function backtrack(str) {
    // 有重复就返回，防止死循环
    if (set.has(str)) {
      return;
    }
    set.add(str);
    backtrack(add(str, a));
    backtrack(loop(str, b));
  }

  backtrack(s);
  const arr = Array.from(set);
  return arr.sort()[0];
};

function add(s, a) {
  let res = '';
  for (let i = 0; i < s.length; ++i) {
    if (i & 1) {
      res += String((Number(s[i]) + a) % 10);
    } else {
      res += s[i];
    }
  }
  return res;
}

function loop(s, b) {
  const n = s.length;
  b %= n;
  const i = n - b;
  return s.slice(i) + s.slice(0, i);
}

// [
//   ['5525', 9, 2],
//   ['74', 5, 1],
//   ['0011', 4, 2],
//   ['43987654', 7, 3],
// ].forEach(A => {
//   console.log(findLexSmallestString(...A))
// })