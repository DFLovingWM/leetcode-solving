/**
 * 递归
 * 
 * 时间：72ms
 */
function parseBoolExpr (expression) {
  // 递归的终止条件/叶子结点
  if (expression === 't') return true
  if (expression === 'f') return false

  // 通过首字符，来判断属于哪种操作
  const firstCh = expression[0]

  if (firstCh === '!') { // 对表达式的值取反
    const operants = parseBody(expression)
    return !parseBoolExpr(operants[0])
  }

  if (firstCh === '&') { // 短路操作
    for (const subExp of parseBody(expression)) {
      if (!parseBoolExpr(subExp)) {
        return false
      }
    }
    return true
  }

  if (firstCh === '|') { // 短路操作
    for (const subExp of parseBody(expression)) {
      if (parseBoolExpr(subExp)) {
        return true
      }
    }
    return false
  }
};

/**
 * 公用方法：解析括号内的内容，拆分为多个操作数
 * @param {string} expression (独立的)表达式
 * @returns {string[]} 操作数数组
 */
function parseBody (expression) {
  const operants = [] // 返回：操作数数组
  let delta = 0
  let acc = ''

  // 解析括号之间的内容（body）
  for (i = 2; i < expression.length - 1; ++i) {
    const ch = expression[i]
    if (ch === ',' && delta === 0) { // 表示新的操作数
      operants.push(acc)
      acc = ''
      continue
    }
    acc += ch
    delta += (ch === '(' ? 1 : ch === ')' ? -1 : 0)
  }

  // 别忘了最后一个操作数
  if (acc) operants.push(acc)

  return operants
}

[
  "!(f)",
  "|(f,t)",
  "&(t,f)",
  "|(&(t,f,t),!(t))",
].forEach(exp => {
  console.log(parseBoolExpr(exp))
})