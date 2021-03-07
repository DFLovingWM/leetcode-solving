let terminal

/**
 * 解法入口
 * @param {string} volume 容量
 * @param {string} state 初始水量状态
 * @param {string} char 字符，表示目标水量
 */
function solve (volume, state, char) {
  terminal = false
  helper(volume, state, char, new Set())
}

/**
 * 递归单元
 */
function helper (volume, state, char, visited) {
  // 叶子结点
  if (state.includes(char)) {
    console.log('恭喜：', state)
    terminal = true
    return
  }

  // 记录本状态（倒过）
  visited.add(state)
  
  // 寻找所有下一个状态
  const length = state.length
  for (let from = 0; from < length; ++from) {
    for (let to = 0; to < length; ++to) {
      if (from === to) continue
      const [f, t] = [Number(state[from]), Number(state[to])]
      const canPour = Math.min(f, Number(volume[to]) - t) // 可以倒的容量，不能超过from有的，也不能超过to剩余的
      if (canPour === 0) continue

      let nextState = ''
      for (let i = 0; i < length; ++i) {
        if (i === from) {
          nextState += Number(state[from]) - canPour
        } else if (i === to) {
          nextState += Number(state[to]) + canPour
        } else {
          nextState += state[i]
        }
      }

      if (!visited.has(nextState)) { // 如果没倒过
        console.log(`${from + 1} => ${to + 1}, ${nextState}`)
        helper(volume, nextState, char, visited)
        if (terminal) return
      }
    }
  }
}

solve('853', '800', '4')
