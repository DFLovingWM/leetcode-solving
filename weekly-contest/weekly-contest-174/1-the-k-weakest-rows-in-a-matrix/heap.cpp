class Solution {
public:
    vector<int> kWeakestRows(vector<vector<int>>& mat, int k) {
        const int m = mat.size();
        const int n = mat[0].size();
        priority_queue<vector<int>> Q;

        for (int i = 0; i < m; ++i) {
            int sum = 0;
            for (int j = 0; j < n; ++j) {
                sum += mat[i][j];
            }
            // 注：这里有个使用`priority_queue`的小技巧
            // 默认是最大堆，然而要找到最小的K个值，所以存相反数。并且按照战力最小、下标最小来排序
            Q.push({ -sum, -i });
        }

        vector<int> res;
        while (k--) {
            auto s = Q.top(); Q.pop();
            res.push_back(-s[1]);
        }
        return res;
    }
};