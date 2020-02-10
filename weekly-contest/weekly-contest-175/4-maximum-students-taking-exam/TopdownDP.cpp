/**
 * Top-down DP
 * 
 * 时间：O(MN * 2^N * 2^N), 8ms
 * 空间：O(M * 2^N), 9.1MB
 */

class Solution {
public:
    int maxStudents(vector<vector<char>>& _seats) {
        seats = _seats;
        m = seats.size();
        n = seats[0].size();

        // 预处理：将每行的空位二进制化
        for (int i = 0; i < m; ++i) {
            int b = 0;
            for (int j = 0; j < n; ++j) {
                if (seats[i][j] == '.') {
                    b |= 1 << j;
                }
            }
            rowEmpties.push_back(b);
        }

        memo = vector<vector<int>>(m, vector<int>(1 << n, -1));
        return helper(0, 0);
    }

    // 逐行放置
    int helper(int i, int prev) {
        if (i == m) return 0;
        if (memo[i][prev] != -1) return memo[i][prev];

        int res = 0;
        for (int curr = rowEmpties[i]; curr >= 0; --curr) { // 检测每一种放置（二进制）
            if ((rowEmpties[i] & curr) == curr) { // 合法放置（curr是rowEmpties[i]的子集）
                int j;
                for (j = 0; j < n; ++j) { // 检测能否作弊
                    if (curr & (1 << j)) {
                        if (j - 1 >= 0 && (curr & (1 << (j - 1)))) break; // 左
                        if (j + 1 < n && (curr & (1 << (j + 1)))) break; // 右
                        if (j - 1 >= 0 && i - 1 >= 0 && (prev & (1 << (j - 1)))) break; // 左上
                        if (j + 1 < n && i - 1 >= 0 && (prev & (1 << (j + 1)))) break; // 右上
                    }
                }
                if (j == n) { // 不能作弊，则更新答案
                    res = max(res, helper(i + 1, curr) + countOne(curr));
                }
            }
        }
        return memo[i][prev] = res;
    }

    // 数num的二进制表示中1的个数
    int countOne(int num) {
        int res = 0;
        for (; num; num >>= 1) {
            res += (num & 1);
        }
        return res;
    }

private:
    int m, n;
    vector<vector<char>> seats; // 座位
    vector<int> rowEmpties; // 记录每行的空位情况（二进制）
    vector<vector<int>> memo; // DP数组
};