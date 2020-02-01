#include <vector>
#include <algorithm>
using namespace std;

class Solution {
public:
    int minTaps(int n, vector<int>& ranges) {
        vector<vector<int>> intervals;
        for (int i = 0; i < ranges.size(); ++i) {
            int left = max(i - ranges[i], 0);
            int right = max(i + ranges[i], 0);
            if (left != right) {
                intervals.push_back({ left, right });
            }
        }

        vector<int> dp(n + 1, INT_MAX); // dp[i]表示到达i的最小区间数
        dp[0] = 0;
        for (int t = 1; t <= n; ++t) {
            for (auto &interval : intervals) {
                if (interval[1] >= t && interval[0] <= n) {
                    if (dp[interval[0]] != INT_MAX) {
                        dp[t] = min(dp[t], dp[interval[0]] + 1);
                    }
                }
            }
        }
        return dp[n] == INT_MAX ? -1 : dp[n];
    }
};