/**
 * 跟着题意来即可，两种变换可以一起来
 * 
 * 时间：`O(NM)`, 4ms
 */

class Solution {
public:
    vector<vector<int>> flipAndInvertImage(vector<vector<int>>& A) {
        const int R = A.size();
        const int C = A[0].size();
        vector<vector<int>> res(R, vector<int>(C, 0));

        // 可以同时执行这两种变换（一遍循环）
        for (int i = 0; i < R; ++i) {
            for (int j = 0; j < C; ++j) {
                res[i][C - j - 1] = 1 - A[i][j];
            }
        }

        return res;
    }
};