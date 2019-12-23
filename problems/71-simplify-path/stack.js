/**
 * 巧妙利用栈，实现文件夹的前进/后退这2种操作
 */
var simplifyPath = function (path) {
  const stack = [];
  const tokens = path.split('/').filter(Boolean); // 斜杠的作用只是分离

  for (const x of tokens) {
    if (x === '..') { // 回退
      if (stack.length > 0) stack.pop()
    } else if (x === '.') { // 当前目录，不理
      
    } else { // 文件夹名
      stack.push(x);
    }
  }

  return '/' + stack.join('/');
};