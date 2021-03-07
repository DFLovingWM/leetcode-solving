/**
 * 正则
 */
var interpret = function(command) {
  return command
    .replace(/\(\)/g, 'o')
    .replace(/\(al\)/g, 'al');
};
