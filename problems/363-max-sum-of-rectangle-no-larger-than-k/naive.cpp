/**
 * 前缀和
 * 
 * 时间：`O(N^4)`, 1592ms
 */

#include <vector>
#include <algorithm>
using namespace std;

class Solution {
public:
    int maxSumSubmatrix(vector<vector<int>>& matrix, int k) {
        const int R = matrix.size(), C = matrix[0].size();

        vector<vector<int>> prefix(R + 1, vector<int>(C + 1, 0));
        for (int i = 1; i <= R; ++i) {
            for (int j = 1; j <= C; ++j) {
                prefix[i][j] = prefix[i-1][j] + prefix[i][j-1] + matrix[i-1][j-1] - prefix[i-1][j-1];
            }
        }

        // 枚举左上角
        int res = k + 1;
        for (int i = 0; i < R; ++i) {
            for (int j = 0; j < C; ++j) {
                // 枚举右下角
                for (int i2 = i; i2 < R; ++i2) {
                    for (int j2 = j; j2 < C; ++j2) {
                        int area = prefix[i2+1][j2+1] - prefix[i2+1][j] - prefix[i][j2+1] + prefix[i][j];
                        if ((area <= k && res > k ) || (area <= k && res <= k && area > res)) { // 要么更合法、要么更优
                            res = area;
                        }
                    }
                }
            }
        }

        return res;
    }
};