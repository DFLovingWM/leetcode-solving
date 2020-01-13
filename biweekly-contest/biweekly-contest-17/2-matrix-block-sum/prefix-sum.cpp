#include <vector>
#include <algorithm>
using namespace std;

class Solution {
public:
    vector<vector<int>> matrixBlockSum(vector<vector<int>>& mat, int K) {
        const int m = mat.size(), n = mat[0].size();
        vector<vector<int>> prefix(m + 1, vector<int>(n + 1, 0));
        for (int i = 1; i <= m; ++i) {
            for (int j = 1; j <= n; ++j) {
                prefix[i][j] = prefix[i-1][j] + prefix[i][j-1] - prefix[i-1][j-1] + mat[i-1][j-1];
            }
        }
        
        vector<vector<int>> res(m, vector<int>(n, 0));
        for (int i = 0; i < m; ++i) {
            for (int j = 0; j < n; ++j) {
                int maxI = min(i + K + 1, m), minI = max(i - K, 0);
                int maxJ = min(j + K + 1, n), minJ = max(j - K, 0);
                res[i][j] = prefix[maxI][maxJ] - prefix[maxI][minJ] - prefix[minI][maxJ] + prefix[minI][minJ];
            }
        }
        return res;
    }
};