/**
 * Bottom-up DP
 * 
 * 时间：`O(N^2)`, 124ms
 */

#include <iostream>
#include <vector>
#include <unordered_map>
#include <unordered_set>
using namespace std;

class Solution {
public:
    int lenLongestFibSubseq(vector<int>& arr) {
        const int n = arr.size();

        unordered_map<int, int> num2Index;
        for (int i = 0; i < n; ++i) {
            num2Index[arr[i]] = i;
        }

        vector<vector<int>> dp(n, vector<int>(n, 0)); // dp[i][j]表示以i结尾、以j为倒数第二结尾的最长Fib子序列
        int res = 0;

        for (int i = 0; i < n; ++i) {
            for (int j = 0; j < i; ++j) { // 往前寻找C能拼接上的
                int K = arr[i] - arr[j];
                if (K < arr[j] && num2Index.count(K)) { // 有推导关系，则+1
                    int k = num2Index[K];
                    dp[i][j] = max(dp[i][j], dp[j][k] + 1);
                    res = max(res, dp[i][j]);
                } else { // 无推到关系，可以初始化为2
                    dp[i][j] = 2;
                }
            }
        }

        return res;
    }
};