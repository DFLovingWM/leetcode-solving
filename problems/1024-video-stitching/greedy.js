/**
 * 排序 + 贪心：
 * 1. 排序：按照`开始时间`排序
 * 2. 贪心：线性遍历，每次取一堆(属于同一层次)，加一次count。关键在于这个“同一堆”怎么界定
 * 
 * 时间复杂度在于排序，为`O(NlogN)`, 耗时56ms
 */
var videoStitching = function(clips, T) {
  clips.sort((a, b) => a[0] - b[0])
  
  let count = 0
  let farest = 0 // 最远延伸
  let lastFarest = -1 // 记录上一个最远延伸

  for (const [left, right] of clips) {
    if (left > farest) { // 最近的跳板都接不上 => 直接失败
      return -1
    } else if (left > lastFarest) { // [重要]新跳板
      lastFarest = farest
      farest = Math.max(farest, right)
      ++count
    } else { // 即 left <= lastFarest，表明与最新跳板属于同一层级，不记录次数，只需要延伸
      farest = Math.max(farest, right)
    }

    if (farest >= T) return count // 到达/超越终点，提前退出（因为求的是最小count）
  }

  return -1
};

[
  [[[0,2],[4,6],[8,10],[1,9],[1,5],[5,9]], 10],
  [[[0,1],[1,2]], 5],
  [[[0,1],[6,8],[0,2],[5,6],[0,4],[0,3],[6,7],[1,3],[4,7],[1,4],[2,5],[2,6],[3,4],[4,5],[5,7],[6,9]], 9],
  [[[0,4],[2,8]], 5],
].forEach(input => {
  console.log(videoStitching(...input))
})