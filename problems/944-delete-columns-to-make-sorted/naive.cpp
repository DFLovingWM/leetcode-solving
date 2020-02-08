/**
 * 按列检查
 * 
 * 时间：`O(NM)`, 52ms
 */

class Solution {
public:
    int minDeletionSize(vector<string>& A) {
        const int R = A.size();
        const int C = A[0].size();
        // 检查每一列，数不满足非降序的列数
        int res = 0;
        for (int j = 0; j < C; ++j) {
            for (int i = 1; i < R; ++i) {
                if (A[i][j] < A[i - 1][j]) { // 如果不满足
                    ++res;
                    break;
                }
            }
        }
        return res;
    }
};