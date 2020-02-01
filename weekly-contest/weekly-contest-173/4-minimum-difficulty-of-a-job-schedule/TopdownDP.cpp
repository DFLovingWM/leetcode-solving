/**
 * Top-down DP
 * 
 * 时间：`O(N^2 * d)`, 44ms
 */

#include <iostream>
#include <vector>
using namespace std;

class Solution {
public:
    int minDifficulty(vector<int>& _jobDifficulty, int _day) {
        jobDifficulty = _jobDifficulty;
        day = _day;
        n = jobDifficulty.size();

        if (day > n) return -1;

        memo = vector<vector<int>>(n + 1, vector<int>(day + 1, -1));
        return helper(0, 0);
    }

    int helper(int i, int d) {
        if (i == n && d == day) return 0;
        if (i == n || d == day) return INT_MAX;

        if (memo[i][d] != -1) return memo[i][d];

        int res = INT_MAX;
        int maxDifficulty = -1;
        for (int j = i + 1; j <= n; ++j) { // j表示分割点（下一次的开头）
            maxDifficulty = max(maxDifficulty, jobDifficulty[j - 1]);
            int curr = helper(j, d + 1);
            if (curr != INT_MAX) {
                res = min(res, curr + maxDifficulty);   
            }
        }
        return memo[i][d] = res;
    }

private:
    int n;
    int day;
    vector<int> jobDifficulty;
    vector<vector<int>> memo;
};