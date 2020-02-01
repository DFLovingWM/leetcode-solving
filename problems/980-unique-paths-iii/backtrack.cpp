/**
 * 回溯
 * 
 * 时间：4ms
 */

class Solution {
public:
    int uniquePathsIII(vector<vector<int>>& _grid) {
        grid = _grid;
        m = grid.size();
        n = grid[0].size();
        vector<vector<bool>> visited(m, vector<bool>(n, false));

        int zero = 0;
        for (int i = 0; i < m; ++i) {
            for (int j = 0; j < n; ++j) {
                if (grid[i][j] == 0) {
                    ++zero;
                } else if (grid[i][j] == 1) {
                    startX = i;
                    startY = j;
                } else if (grid[i][j] == 2) {
                    endX = i;
                    endY = j;
                }
            }
        }

        res = 0;
        backtrack(startX, startY, zero, visited);
        return res;
    }

    void backtrack(int x, int y, int needZero, vector<vector<bool>> &visited) {
        if (x == endX && y == endY) {
            if (needZero == 0) ++res;
            return;
        }
        
        // 探索
        visited[x][y] = true;
        for (auto &dir : DIRS) {
            int nx = x + dir[0];
            int ny = y + dir[1];
            if (isValid(nx, ny) && grid[nx][ny] != -1 && !visited[nx][ny]) { // 能走
                backtrack(nx, ny, needZero + (grid[nx][ny] == 0 ? -1 : 0), visited);
            }
        }
        // 回溯
        visited[x][y] = false;
    }

    bool isValid(int x, int y) {
        return x >= 0 && x < m && y >= 0 && y < n;
    }

private:
    int m, n;
    int startX, startY, endX, endY;
    vector<vector<int>> grid;
    const vector<vector<int>> DIRS = {{-1, 0}, {1, 0}, {0, 1}, {0, -1}};
    int res;
};