/**
 * 贪心。在能拼接的clips中，取能延伸最长的
 * 
 * 时间：`O(NlogN)`, 64ms
 */
var videoStitching = function (clips, T) {
  clips.sort((a, b) => a[0] - b[0]) // 开始时间升序

  let res = 0
  let end = 0
  
  for (let i = 0; i < clips.length && end < T; ++i) {
    let j = i
    let bestJ = -1

    while (j < clips.length && clips[j][0] <= end) { // 能拼接（可行解）
      if (bestJ === -1 || clips[j][1] > clips[bestJ][1]) { // 能延伸到最远（最优解）
        bestJ = j
      }
      ++j
    }
    if (bestJ === -1) return -1 // 可行解都没有 => 失败

    ++res
    end = clips[bestJ][1]
    i = j
    --i
  }

  return end < T ? -1 : res
};

module.exports = videoStitching