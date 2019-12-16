/**
 * 一维前缀和
 * 
 * 时间：O(N^3), 204ms
 */

#include <vector>
#include <algorithm>
using namespace std;

class Solution {
public:
    int maxSideLength(vector<vector<int>>& mat, int threshold) {
        const int R = mat.size(), C = mat[0].size();

        // 预处理：行列前缀和
        vector<int> row[R];
        vector<int> col[C];
        for (int i = 0; i < R; ++i) {
            int acc = 0;
            row[i].push_back(acc);
            for (int j = 0; j < C; ++j) {
                acc += mat[i][j];
                row[i].push_back(acc);
            }
        }
        for (int j = 0; j < C; ++j) {
            int acc = 0;
            col[j].push_back(acc);
            for (int i = 0; i < R; ++i) {
                acc += mat[i][j];
                col[j].push_back(acc);
            }
        }

        // 枚举左上角的坐标
        int res = 0;
        for (int i = 0; i < R; ++i) {
            for (int j = 0; j < C; ++j) {
                // 枚举边长
                const int maxK = min(R - i, C - j);
                int area = 0;
                for (int k = 1; k <= maxK; ++k) {
                    area += (row[i+k-1][j+k] - row[i+k-1][j]) + // 下横边
                        (col[j+k-1][i+k] - col[j+k-1][i]) - // 右竖边
                        mat[i+k-1][j+k-1]; // 右下角(多加了一次，所以这里要减回去)
                    if (area <= threshold) {
                        res = max(res, k);
                    } else {
                        break;
                    }
                }
            }
        }

        return res;
    }
};