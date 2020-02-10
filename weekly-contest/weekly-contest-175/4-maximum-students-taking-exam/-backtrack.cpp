/**
 * 回溯：遍历每一个空位，选择坐/不坐
 */

class Solution {
public:
    int maxStudents(vector<vector<char>>& _seats) {
        seats = _seats;
        m = seats.size();
        n = seats[0].size();
        // 筛选出所有可以坐的位置
        for (int i = 0; i < m; ++i) {
            for (int j = 0; j < n; ++j) {
                if (seats[i][j] == '.') {
                    emptySeats.push_back({ i, j });
                }
            }
        }
        // 开始回溯
        res = 0;
        backtrack(0, 0);
        return res;
    }

    // 检测第`i`个空位是否能坐下
    void backtrack(int i, int cnt) {
        if (i == emptySeats.size()) { // 终点
            res = max(res, cnt);
            return;
        }

        bool canSit = true;
        int x = emptySeats[i][0], y = emptySeats[i][1];
        for (auto &nei : NEI) {
            int nx = x + nei[0];
            int ny = y + nei[1];
            if (isValid(nx, ny) && seats[nx][ny] == 'S') { // 能作弊（冲突）
                canSit = false;
                break;
            }
        }
        // 不坐
        backtrack(i + 1, cnt);
        // 坐
        if (canSit) {
            seats[x][y] = 'S';
            backtrack(i + 1, cnt + 1);
            seats[x][y] = '.';
        }
    }

    bool isValid(int i, int j) {
        return i >= 0 && i < m && j >= 0 && j < n;
    }

private:
    vector<vector<char>> seats;
    vector<vector<int>> emptySeats;
    int NEI[4][2] = {{0, 1}, {0, -1}, {-1, 1}, {-1, -1}};
    int m, n;
    int res;
};