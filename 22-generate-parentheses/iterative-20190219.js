const LEFT = '(', RIGHT = ')'

/**
 * 迭代法：是递归法的逻辑树的BFS实现
 * - 优点：可避免栈溢出
 * - 缺点：无法模拟递归的参数传递，故每次都要数一遍有多少left和right，这里花费了O(N)的时间，也许比递归法更耗时了
 */
function generateParenthesis(n) {
  let combs = ['']

  for (let i = 0, I = n * 2; i < I; ++i) {
    let nextCombs = [] // 即将生成的新结果

    for (const comb of combs) { // 遍历上一层的结果
      let leftCount = 0,
          rightCount = 0
      for (const char of comb) { // 数数有多少个left、right，这一步耗时，但在BFS中免不了
        if (char === LEFT) ++leftCount
        else if (char === RIGHT) ++rightCount
      }
      
      if (leftCount === rightCount) {
        nextCombs.push(comb + LEFT)
      } else if (leftCount > rightCount) {
        if (leftCount < n) {
          nextCombs.push(comb + LEFT)
        }
        nextCombs.push(comb + RIGHT)
      }
    }

    combs = nextCombs // 记录最新/最终结果
  }

  return combs
}
