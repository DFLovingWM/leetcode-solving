/**
 * 哈希
 */
var getFolderNames = function(names) {
  const idMap = new Map(); // 文件名 => 最大id
  const fileSet = new Set(); // 已有文件
  const res = [];

  for (const name of names) {
    if (!fileSet.has(name)) { // 不冲突
      res.push(name);
      fileSet.add(name);
      idMap.set(name, 0);
      continue;
    }

    // 冲突
    let id, nextName;
    for (id = (idMap.get(name) || 0) + 1; fileSet.has(nextName = (`${name}(${id})`)); ++id) ;
    res.push(nextName);
    fileSet.add(nextName);
    idMap.set(name, id);
  }

  return res;
};

[
//   ["pes","fifa","gta","pes(2019)"],
//   ["gta","gta(1)","gta","avalon"],
//   ["onepiece","onepiece(1)","onepiece(2)","onepiece(3)","onepiece"],
//   ["wano","wano","wano","wano"],
//   ["kaido","kaido(1)","kaido","kaido(1)"],
  ["kaido","kaido(1)","kaido","kaido(1)","kaido(2)"],
].forEach(a => {
  console.log(getFolderNames(a));
});
