/**
 * Bottom-up DP
 * 
 * 时间：`O(N^2)`, 12ms
 * 空间：`O(N)`
 */

class Solution {
public:
    int wiggleMaxLength(vector<int>& nums) {
        const int n = nums.size();
        if (n < 2) return n;

        // dp[i][0/1]表示最后下降/上升到`nums[i]`的摆动序列的最大长度
        vector<vector<int>> dp(n, vector<int>(2, 1));
        int res = 1;

        for (int i = 1; i < n; ++i) {
            for (int j = i - 1; j >= 0; --j) {
                if (nums[i] > nums[j]) {
                    dp[i][1] = max(dp[i][1], dp[j][0] + 1);
                }
                if (nums[i] < nums[j]) {
                    dp[i][0] = max(dp[i][0], dp[j][1] + 1);
                }
            }
            res = max({res, dp[i][0], dp[i][1]});
        }

        return res;
    }
};