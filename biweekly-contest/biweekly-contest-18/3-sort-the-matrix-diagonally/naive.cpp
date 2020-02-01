class Solution {
public:
    vector<vector<int>> diagonalSort(vector<vector<int>>& mat) {
        const int R = mat.size(), C = mat[0].size();
        const int lo = -(C - 1), hi = R - 1;
        for (int k = lo; k <= hi; ++k) {
            // 拿出来
            vector<int> tmp;
            for (int i = max(0, k); i < R && i - k < C; ++i) {
                int j = i - k;
                tmp.push_back(mat[i][j]);
            }
            // 排序
            sort(tmp.begin(), tmp.end());
            // 放回去
            int cnt = 0;
            for (int i = max(0, k); i < R && i - k < C; ++i) {
                int j = i - k;
                mat[i][j] = tmp[cnt++];
            }
        }
        return mat;
    }
};