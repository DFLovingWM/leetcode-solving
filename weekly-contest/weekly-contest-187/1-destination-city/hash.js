/**
 * 哈希表：先记录所有站点，然后移除非终点站，剩下的就是终点站。
 * 哈希表在此发挥了2个优点：
 * 1、去重
 * 2、快速删除
 */
var destCity = function(paths) {
  const set = new Set();
  for (const [a, b] of paths) {
    set.add(a);
    set.add(b);
  }
  for (const [a, ] of paths) {
    set.delete(a);
  }
  return set.values().next().value;
};


[
  [["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]],
  [["B","C"],["D","B"],["C","A"]],
  [["A","Z"]],
].forEach(A => {
  console.log(destCity(A))
})