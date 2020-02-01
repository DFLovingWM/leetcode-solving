/**
 * 计算行频次（将“行数组”当作基本类型对待）
 * 
 * 时间：`O(K * N^2)`, 52ms
 */

class Solution {
public:
    int findBlackPixel(vector<vector<char>>& picture, int N) {
        const int R = picture.size();
        const int C = picture[0].size();

        // 计算行频次（聚集相等的行，保证第2个条件）
        unordered_map<string, int> rowFreq; // 行串 => 频次（行中所有数字相等，则为行相等）
        unordered_map<string, int> row2Count; // 行串 => 黑色像素数
        for (int i = 0; i < R; ++i) {
            string row(picture[i].begin(), picture[i].end()); // 将行数组化为字符串（呃，虽然C++字符串也不是基本类型）
            ++rowFreq[row];

            int cnt = 0;
            for (char ch : row) {
                if (ch == 'B') {
                    ++cnt;
                }
            }
            row2Count[row] = cnt;
        }

        // 预处理：算出每一列有多少个black
        vector<int> col2Count(C, 0); // 列 => 黑色像素数
        for (int i = 0; i < R; ++i) {
            for (int j = 0; j < C; ++j) {
                if (picture[i][j] == 'B') {
                    ++col2Count[j];
                }
            }
        }

        // 检查每一种行
        int res = 0;
        for (auto &p : rowFreq) {
            auto &row = p.first;
            auto &freq = p.second;
            if (freq == N) { // 表示某列至少有N个黑色像素
                for (int j = 0; j < C; ++j) {
                    if (row[j] == 'B' && row2Count[row] == N && col2Count[j] == N) { // 检查该行、该列是否有且只有N个黑色像素（第1个条件）
                        res += N;
                    }
                }
            }
        }

        return res;
    }
};