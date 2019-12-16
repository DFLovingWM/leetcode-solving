/**
 * 二维前缀和
 * 
 * 时间：O(N^3), 352ms
 */

#include <vector>
#include <algorithm>
using namespace std;

class Solution {
public:
    int maxSideLength(vector<vector<int>>& mat, int threshold) {
        const int R = mat.size(), C = mat[0].size();

        // 计算矩阵的前缀和
        // prefix[i][j]表示左上角(0, 0)到右下角(i, j)所围矩阵的和
        vector<vector<int>> prefix(R + 1, vector<int>(C + 1, 0));
        for (int i = 1; i <= R; ++i) {
            for (int j = 1; j <= C; ++j) {
                prefix[i][j] = prefix[i-1][j] + prefix[i][j-1] - prefix[i-1][j-1] + mat[i-1][j-1]; // 容斥原理
            }
        }

        // 枚举：
        int res = 0;
        // 枚举左上角
        for (int i = 0; i < R; ++i) {
            for (int j = 0; j < C; ++j) {
                // 枚举边长
                const int maxK = min(R - i, C - j);
                for (int k = 1; k <= maxK; ++k) {
                    int area = prefix[i+k][j+k] - prefix[i+k][j] - prefix[i][j+k] + prefix[i][j];
                    if (area <= threshold) {
                        res = max(res, k);
                    }
                }
            }
        }

        return res;
    }
};