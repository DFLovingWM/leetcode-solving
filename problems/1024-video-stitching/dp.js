/**
 * Refers to: https://leetcode.com/problems/video-stitching/discuss/270149/C%2B%2B-DP-solution%3A-very-similar-to-minimum-number-of-refueling-stops
 * 
 * dp[i]：第i个clip能到达的最远距离，则状态转移方程为：
 * dp[i] = max(dp[i], clips[j][1])，当：dp[i-1] <= clips[j][0]
 * 
 * DP过程的时间复杂度：`O(N2)`
 */
var videoStitching = function(clips, T) {
  const length = clips.length
  const dp = Array.from({ length: length + 1 }, () => -1)

  dp[0] = 0
  for (let i = 1; i <= length; ++i) {
    for (let j = 0; j < length; ++j) {
      if (clips[j][0] <= dp[i - 1]) { // 如果能接上
        dp[i] = Math.max(dp[i], clips[j][1]) // 尽量接远点
      }
    }
  }

  let min = -1
  for (let i = 1; i <= length; ++i) {
    if (dp[i] >= T) {
      min = i
      break
    }
  }

  return min
};

[
  [[[0,2],[4,6],[8,10],[1,9],[1,5],[5,9]], 10],
  [[[0,1],[1,2]], 5],
  [[[0,1],[6,8],[0,2],[5,6],[0,4],[0,3],[6,7],[1,3],[4,7],[1,4],[2,5],[2,6],[3,4],[4,5],[5,7],[6,9]], 9],
  [[[0,4],[2,8]], 5],
].forEach(input => {
  console.log(videoStitching(...input))
})