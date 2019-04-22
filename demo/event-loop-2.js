function log(...s) {
  console.log(...s)
}

setTimeout(() => { // M
  log('timeout 1')

  Promise.resolve().then(() => {
    log('promise 11')

    process.nextTick(() => { // m
      log('nextTick in promise 11')
    })
  })

  Promise.resolve().then(() => {
    log('promise 12')

    process.nextTick(() => { // m
      log('nextTick in promise 12')
    })
  })

  process.nextTick(() => { // m
    log('nextTick 11')

    process.nextTick(() => { // m
      log('nextTick 111')
    })
  })
})

setImmediate(() => { // M
  log('immediate 1')
})