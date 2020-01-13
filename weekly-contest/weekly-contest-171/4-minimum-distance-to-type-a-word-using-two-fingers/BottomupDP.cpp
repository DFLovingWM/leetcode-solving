/**
 * Bottom-up DP
 * 
 * 时间：`O(N * BASE * BASE)`, 76ms
 */

#include <vector>
#include <string>
#include <algorithm>
using namespace std;

const int INFI = INT_MAX;
const int BASE = 26;

class Solution {
public:
    int minimumDistance(string word) {
        const int N = word.size();
        // dp[i][l][r]表示第i步、手指分别在left/right的最小步数
        vector<vector<vector<int>>> dp(N + 1, vector<vector<int>>(BASE, vector<int>(BASE, INFI)));

        for (int i = 0; i < BASE; ++i) {
            for (int j = 0; j < BASE; ++j) {
                dp[0][i][j] = 0;
            }
        }

        for (int i = 1; i <= N; ++i) {
            int ch = word[i - 1] - 'A';
            for (int l = 0; l < BASE; ++l) {
                for (int r = 0; r < BASE; ++r) {
                    if (dp[i - 1][l][r] != INFI) {
                        dp[i][ch][r] = min(dp[i][ch][r], dp[i - 1][l][r] + dist(l, ch)); // 左指走
                        dp[i][l][ch] = min(dp[i][l][ch], dp[i - 1][l][r] + dist(r, ch)); // 右指走
                    }
                }
            }
        }

        int res = INFI;
        for (int l = 0; l < BASE; ++l) {
            for (int r = 0; r < BASE; ++r) {
                res = min(res, dp[N][l][r]);
            }
        }

        return res;
    }

    int dist(int from, int to) {
        int fx = from / 6, fy = from % 6;
        int tx = to / 6, ty = to % 6;
        return abs(fx - tx) + abs(fy - ty);
    }
};