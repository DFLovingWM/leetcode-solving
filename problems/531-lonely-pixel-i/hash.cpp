/**
 * 哈希优化
 * 
 * 时间：`O(N^2)`, 44ms
 */

class Solution {
public:
    int findLonelyPixel(vector<vector<char>>& picture) {
        const int R = picture.size();
        const int C = picture[0].size();

        // 哈希优化：提前数好每行、每列有多少个Black
        vector<int> row2Count(R, 0);
        vector<int> col2Count(C, 0);
        for (int i = 0; i < R; ++i) {
            for (int j = 0; j < C; ++j) {
                if (picture[i][j] == 'B') {
                    ++row2Count[i];
                    ++col2Count[j];
                }
            }
        }

        // 最后数答案
        int res = 0;
        for (int i = 0; i < R; ++i) {
            for (int j = 0; j < C; ++j) {
                // 如果第`i`行、第`i`列都只有1个黑元素，并且就在`(i, j)`这个位置上，那么就累加1
                if (picture[i][j] == 'B' && row2Count[i] == 1 && col2Count[j] == 1) {
                    ++res;
                }
            }
        }
        return res;
    }
};