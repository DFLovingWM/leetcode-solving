function httpGet (url, callback) {
  process.nextTick(() => {
    callback(new Error('Wrong!'), 'This is baidu!')
  })
}

httpGet('https://www.baidu.com', (err, data) => {
  if (err) {
    console.log('调用出错：', err)
  } else {
    console.log('成功：', data)
  }
})

// process.on('uncaughtException', (err) => {
//   console.log('没有处理的异常：', err)
// })