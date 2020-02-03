/**
 * Bottom-up DP：dp[i]表示从`i`跳出去的最大访问数
 * 
 * 时间：`O(NlogN + ND)`, 32ms
 * 空间：`O(N)`
 */

class Solution {
public:
    int maxJumps(vector<int>& arr, int d) {
        const int n = arr.size();

        // 按照高度从低到高排序
        vector<int> ids;
        for (int i = 0; i < n; ++i) ids.push_back(i);
        sort(ids.begin(), ids.end(), [&](int i, int j) {
            return arr[i] < arr[j];
        });

        // 状态表示：dp[i]表示从`i`跳出去的最大访问数
        vector<int> dp(n, 1);
        int res = 1;
        for (int i : ids) {
            // 从`i`跳到左边更低的`j`
            for (int j = i - 1; j >= 0 && i - j <= d && arr[j] < arr[i]; --j) {
                dp[i] = max(dp[i], dp[j] + 1);
            }

            // 从`i`跳到右边更低的`j`
            for (int j = i + 1; j < n && j - i <= d && arr[j] < arr[i]; ++j) {
                dp[i] = max(dp[i], dp[j] + 1);
            }

            res = max(res, dp[i]);
        }
        return res;
    }
};