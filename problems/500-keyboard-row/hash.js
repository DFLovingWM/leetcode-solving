/**
 * 哈希
 * 
 * 时间：`O(NL)`, 56ms
 */
var findWords = function(words) {
  // 构造键盘映射
  const letter2Row = new Map();
  for (const ch of 'qwertyuiop') {
    letter2Row.set(ch, 0);
    letter2Row.set(ch.toUpperCase(), 0);
  }
  for (const ch of 'asdfghjkl') {
    letter2Row.set(ch, 1);
    letter2Row.set(ch.toUpperCase(), 1);
  }
  for (const ch of 'zxcvbnm') {
    letter2Row.set(ch, 2);
    letter2Row.set(ch.toUpperCase(), 2);
  }

  // 筛选
  return words.filter(word => {
    const row = letter2Row.get(word[0]);
    for (const ch of word) {
      if (letter2Row.get(ch) !== row) return false;
    }
    return true;
  })
};