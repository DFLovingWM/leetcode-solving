/**
 * Bottom-up DP
 * 
 * 时间：`O(N^2)`, ms
 */

class Solution {
public:
    int calculateMinimumHP(vector<vector<int>>& dungeon) {
        const int m = dungeon.size();
        const int n = dungeon[0].size();
        vector<vector<int>> dp(m + 1, vector<int>(n + 1, INT_MAX));
        
        return dp[m-1][n-1];
    }
};