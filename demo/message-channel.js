// const { MessageChannel } = require('worker_threads');

function deepClone (src) {
  return new Promise((resolve, reject) => {
    const { port1, port2 } = new MessageChannel()
    port2.onmessage = ({ data }) => {
      resolve(data)
    }
    port1.postMessage(src)
  })
}

async function main () {
  const src = {
    date: new Date()
  }
  const dest = await deepClone(src)
  console.log('Result:', dest)
  console.log(src.date === dest.date)
}

main()