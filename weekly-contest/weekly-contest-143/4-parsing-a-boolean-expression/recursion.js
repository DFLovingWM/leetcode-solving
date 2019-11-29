/**
 * 递归
 */
function parseBoolExpr (expression) {
  if (expression === 't') return true
  if (expression === 'f') return false

  const firstCh = expression[0]

  if (firstCh === '!') {
    const operants = parseBody(expression)
    return !parseBoolExpr(operants[0])
  }

  if (firstCh === '&') {
    for (const subExp of parseBody(expression)) {
      if (!parseBoolExpr(subExp)) {
        return false
      }
    }
    return true
  }

  if (firstCh === '|') {
    for (const subExp of parseBody(expression)) {
      if (parseBoolExpr(subExp)) {
        return true
      }
    }
    return false
  }
};

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