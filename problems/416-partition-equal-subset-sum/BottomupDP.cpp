/**
 * Bottom-up DP（01背包问题）
 * 
 * 时间：`O(NV)`, 136ms
 * 空间：`O(V)`
 */

class Solution {
public:
    bool canPartition(vector<int>& nums) {
        int sum = 0;
        for (int num : nums) {
            sum += num;
        }
        if (sum % 2 == 1) return false;

        int target = sum / 2;
        // dp[i]表示和为`i`是否存在
        vector<bool> dp(target + 1, false);
        dp[0] = true;
        for (int num : nums) { // 对于每个硬币（只能用一次）
            for (int i = target; i >= num; --i) { // 逆向
                if (dp[i - num]) {
                    dp[i] = true;
                }
            }
        }
        return dp[target];
    }
};