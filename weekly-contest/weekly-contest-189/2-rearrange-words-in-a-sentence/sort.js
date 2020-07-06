/**
 * 定义排序标准即可
 */
var arrangeWords = function(text) {
  const res = text.split(' ').map((v, i) => ({
    v,
    i
  })).sort((A, B) => {
    const a = A.v;
    const b = B.v;
    if (a.length !== b.length) return a.length - b.length;
    return A.i - B.i;
  }).map(e => e.v).join(' ');
  return res[0].toUpperCase() + res.slice(1).toLowerCase();
};

function isUpperCase(x) {
  return x.toUpperCase() === x;
}