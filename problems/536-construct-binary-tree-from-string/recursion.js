/**
 * 递归：每次解析出一个结点
 */
var str2tree = function (text) {
  if (!text) return null

  let delta = 0
  let 
  for (let i = 0; i < text.length; ++i) {
    if ()
  }

  const match = text.match(re)
  const res = new TreeNode(Number(match[1]))
  res.left = str2tree(match[2] || '')
  res.right = str2tree(match[3] || '')
  return res
};