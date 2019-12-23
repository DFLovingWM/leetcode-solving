/**
 * 二维前缀和 + 贪心：
 * 如果以(x, y)为右下角，存在边长为 k+1 的合法正方形，
 * 那么以(x-1, y-1)为右下角，一定存在边长为 k 的合法正方形，
 * 因为 k 是递增（每次加1）检测的。
 * 
 * 时间：O(N^2), 88ms
 */

#include <vector>
#include <algorithm>
using namespace std;

class Solution {
public:
    int maxSideLength(vector<vector<int>>& mat, int threshold) {
        const int R = mat.size(), C = mat[0].size();

        vector<vector<int>> prefix(R + 1, vector<int>(C + 1, 0)); // prefix[i][j]表示左上角(0, 0)到右下角(i, j)所围矩阵的和
        int res = 0; // 当前边长
        int k = 1; // 更大边长（待检测是否存在）

        for (int i = 1; i <= R; ++i) {
            for (int j = 1; j <= C; ++j) {
                prefix[i][j] = prefix[i-1][j] + prefix[i][j-1] - prefix[i-1][j-1] + mat[i-1][j-1]; // 容斥原理

                // 将(i,j)当成右下角，检查是否存在大1的边长
                if (i >= k && j >= k && prefix[i][j] - prefix[i-k][j] - prefix[i][j-k] + prefix[i-k][j-k] <= threshold) {
                    res = k++;
                }
            }
        }

        return res;
    }
};