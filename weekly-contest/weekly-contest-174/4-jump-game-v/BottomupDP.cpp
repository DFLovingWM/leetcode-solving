/**
 * Bottom-up DP：dp[i]表示跳到`i`的最大访问数
 * 
 * 时间：`O(NlogN + ND)`, 132ms
 * 空间：`O(N)`
 */

class Solution {
public:
    int maxJumps(vector<int>& arr, int d) {
        const int n = arr.size();

        // 预处理：按照高度从高到低排序
        vector<int> ids;
        for (int i = 0; i < n; ++i) ids.push_back(i);
        sort(ids.begin(), ids.end(), [&](int i, int j) {
            return arr[i] > arr[j]; // 闭包
        });

        // 预处理：对于某个位置，找到它所有前驱位置
        vector<int> higher[n]; // 邻接表：higher[i]表示比`i`高的可达位置
        for (int i = 0; i < n; ++i) {
            // 左边
            for (int j = i - 1; j >= 0 && i - j <= d && arr[j] < arr[i]; --j) {
                higher[j].push_back(i);
            }
            // 右边
            for (int j = i + 1; j < n && j - i <= d && arr[j] < arr[i]; ++j) {
                higher[j].push_back(i);
            }
        }

        // 状态表示：dp[i]表示跳到`i`的最大访问数
        vector<int> dp(n, 1);
        int res = 1;
        for (int i : ids) {
            for (int j : higher[i]) {
                dp[i] = max(dp[i], dp[j] + 1);
            }
            res = max(res, dp[i]);
        }
        return res;
    }
};