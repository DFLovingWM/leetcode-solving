/**
 * 排序 + 优先队列
 * 
 * 时间：O(NlogK), 256ms
 * 空间：O(N), 28.6MB
 */

#include <iostream>
#include <queue>
using namespace std;

using LL = long long;

class Solution {
public:
    int maxPerformance(int n, vector<int>& speeds, vector<int>& efficiencies, int k) {
      vector<vector<int>> arr;
      for (int i = 0; i < n; ++i) {
        arr.push_back({ efficiencies[i], speeds[i] });
      }
      // 效率大的在前
      sort(arr.begin(), arr.end(), [&](auto &A, auto &B) {
        return A[0] > B[0];
      });

      LL res = 0; // 结果
      priority_queue<int, vector<int>, greater<int>> Q; // 最小堆，存放速度
      LL sum = 0; // 优先队列中的速度之和

      for (int i = 0; i < n; ++i) {
        const int s = arr[i][1];
        const int e = arr[i][0];
        // 入队
        Q.push(s);
        sum += s;
        // 最小堆，大小不超过K
        if (Q.size() > k) {
          sum -= Q.top();
          Q.pop(); 
        }
        // 更新答案
        res = max(res, sum * e);
      }

      return res % MOD;
    }
  
private:
  const int MOD = 1e9 + 7;
};