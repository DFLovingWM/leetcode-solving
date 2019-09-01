/**
 * 空格分隔，每部分逆转
 */
var reverseWords = function(text) {
  return text.split(' ').map(segment => Array.from(segment).reverse().join('')).join(' ')
};
}