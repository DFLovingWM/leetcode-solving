/**
 * 最小房间必定是以前被选中的房间，现在的数量就是round数，再统计有多少余数，恢复即可
 */
const readline = require('readline');
const fs = require('fs');
const r = readline.createInterface({
  // input: fs.createReadStream('./in.txt'),
  // output: fs.createReadStream('./out.txt'),
  input: process.stdin,
  output: process.stdout,
})

let lineNum = -1

let roomNum, lastRoom // 房间数，最后分配的房间号
let rooms // 最后的房间情况

r.on('line', (line) => {
  ++lineNum
  if (lineNum === 0) {
    [roomNum, lastRoom] = line.split(' ').map(Number)
    --lastRoom
  } else if (lineNum === 1) {
    rooms = line.split(' ').map(Number)
    solve(rooms, lastRoom)
  }
})

function solve (rooms, lastRoom) {
  const n = rooms.length
  
  // 最少人数，就是目标房间（如果存在多个min，则有多个解，随便取一个即可）
  let targetRoom = -1
  for (let i = 0; i < n; ++i) {
    if (targetRoom === -1 || rooms[i] < rooms[targetRoom]) {
      targetRoom = i
    }
  }

  const round = rooms[targetRoom] // 经历了多少圈
  let count = round * n
  const delta = new Array(n).fill(round)
  for (let i = (targetRoom + 1 + n) % n; i <= lastRoom; i = (i + 1 + n) % n) { // 循环数组
    ++delta[i]
    ++count
  }

  const oldRooms = rooms.slice()
  for (let i = 0; i < n; ++i) {
    oldRooms[i] -= delta[i] // 还原
  }
  oldRooms[targetRoom] += count
  
  // 输出
  console.log(oldRooms.join(' '))
}