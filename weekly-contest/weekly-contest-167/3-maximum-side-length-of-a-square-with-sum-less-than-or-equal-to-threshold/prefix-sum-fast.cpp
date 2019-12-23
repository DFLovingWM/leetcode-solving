/**
 * 二维前缀和 + 优化枚举
 * 
 * 时间：O(N^2), 84ms
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

        // 枚举
        int currK = 0;
        for (int i = 0; i < R; ++i) {
            for (int j = 0; j < C; ++j) {
                const int maxK = min(R - i, C - j);

                // 优化1：从当前结果+1开始出发（为了找更大）
                for (int k = currK + 1; k <= maxK; ++k) {
                    int area = prefix[i+k][j+k] - prefix[i+k][j] - prefix[i][j+k] + prefix[i][j];
                    if (area <= threshold) {
                        currK = max(currK, k);
                    } else {
                        // 优化2：超过阈值的话，就不用再增加边长了
                        break;
                    }
                }
            }
        }

        return currK;
    }
};