/**
 * 基本的矩阵操作
 */

class Solution {
public:
    vector<vector<int>> transpose(vector<vector<int>>& A) {
        const int R = A.size();
        const int C = A[0].size();
        vector<vector<int>> res(C, vector<int>(R));
        for (int i = 0; i < R; ++i) {
            for (int j = 0; j < C; ++j) {
                res[j][i] = A[i][j]; // 行列索引互换即可
            }
        }
        return res;
    }
};