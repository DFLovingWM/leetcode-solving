/**
 * （不看评论读不懂题目系列）
 * 哈希优化
 * 
 * 时间：`O(N^3)`, 80ms
 */

class Solution {
public:
    int findBlackPixel(vector<vector<char>>& picture, int N) {
        const int R = picture.size();
        const int C = picture[0].size();

        // 预处理1（行相等判断）。O(N^3)
        vector<vector<bool>> rowEqual(R, vector<bool>(R, false));
        for (int i = 0; i < R; ++i) {
            rowEqual[i][i] = true;
            for (int j = i + 1; j < R; ++j) {
                bool equal = true;
                for (int k = 0; k < C; ++k) {
                    if (picture[i][k] != picture[j][k]) {
                        equal = false;
                        break;
                    }
                }
                rowEqual[i][j] = rowEqual[j][i] = equal;
            }
        }

        // 预处理2（哈希优化）：提前数好每行有哪些列有black、每列有哪些行有black。O(N^2)
        vector<int> row2Cols[R];
        vector<int> col2Rows[C];
        for (int i = 0; i < R; ++i) {
            for (int j = 0; j < C; ++j) {
                if (picture[i][j] == 'B') {
                    row2Cols[i].push_back(j);
                    col2Rows[j].push_back(i);
                }
            }
        }

        // 最后数答案。O(N^3)
        int res = 0;
        for (int i = 0; i < R; ++i) {
            for (int j = 0; j < C; ++j) {
                if (picture[i][j] == 'B' && row2Cols[i].size() == N && col2Rows[j].size() == N) {
                    // 检查每一行是否相等
                    bool allEqual = true;
                    for (int k : col2Rows[j]) {
                        if (!rowEqual[i][k]) {
                            allEqual = false;
                            break;
                        }
                    }
                    if (allEqual) ++res;
                }
            }
        }
        return res;
    }
};