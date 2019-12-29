#include <vector>
#include <string>
#include <algorithm>
using namespace std;

const int MOD = 1e9 + 7;

class Solution {
public:
    vector<int> pathsWithMaxScore(vector<string>& board) {
        const int n = board.size();

        vector<vector<int>> dp(n + 1, vector<int>(n + 1, 0));
        vector<vector<int>> strat(n + 1, vector<int>(n + 1, 0));

        for (int j = 0; j <= n; ++j) {
            dp[n][j] = -1;
        }
        for (int i = 0; i <= n; ++i) {
            dp[i][n] = -1;
        }
        for (int i = 0; i < n; ++i) {
            for (int j = 0; j < n; ++j) {
                if (board[i][j] == 'X') {
                    dp[i][j] = -1;
                }
            }
        }
        board[0][0] = board[n-1][n-1] = '0';

        for (int i = n - 1; i >= 0; --i) {
            for (int j = n - 1; j >= 0; --j) {
                if (i == n - 1 && j == n - 1) {
                    dp[i][j] = 0;
                    strat[i][j] = 1;
                } else if (board[i][j] != 'X') {
                    int maximum = max(dp[i+1][j+1], max(dp[i+1][j], dp[i][j+1]));
                    if (maximum == -1) { // 该位置不可达
                        continue;
                    }

                    dp[i][j] = (board[i][j] - '0' + maximum) % MOD;
                    if (maximum == dp[i+1][j+1]) {
                        strat[i][j] = (strat[i][j] + strat[i+1][j+1]) % MOD;
                    }
                    if (maximum == dp[i+1][j]) {
                        strat[i][j] = (strat[i][j] + strat[i+1][j]) % MOD;
                    }
                    if (maximum == dp[i][j+1]) {
                        strat[i][j] = (strat[i][j] + strat[i][j+1]) % MOD;
                    }
                }
            }
        }

        if (strat[0][0] == 0) return {0, 0};
        return {dp[0][0], strat[0][0]};
    }
};