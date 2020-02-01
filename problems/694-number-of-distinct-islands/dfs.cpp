/**
 * DFS + 搜索路径哈希
 * 
 * 时间：`O(N^2)`, 56ms
 */

typedef vector<int> Point;

class Solution {
public:
    int numDistinctIslands(vector<vector<int>>& grid) {
        R = grid.size();
        C = grid[0].size();
        visit = vector<vector<bool>>(R, vector<bool>(C, false));

        unordered_set<string> paths;
        for (int i = 0; i < R; ++i) {
            for (int j = 0; j < C; ++j) {
                if (grid[i][j] == 1 && !visit[i][j]) {
                    string path;
                    dfs(grid, i, j, path);
                    paths.insert(path);
                }
            }
        }
        return paths.size();
    }

    // DFS(着色)
    void dfs(vector<vector<int>>& grid, int x, int y, string &path) {
        visit[x][y] = true;
        for (int k = 0; k < 4; ++k) {
            auto &dir = DIRS[k];
            int nx = x + dir[0];
            int ny = y + dir[1];
            if (isValid(nx, ny) && !visit[nx][ny] && grid[nx][ny] == 1) {
                path.push_back('0' + k); // 记录探索方向
                dfs(grid, nx, ny, path);
                path.push_back('0' + (k + 2) % 4); // 记录回溯方向(反方向)
            }
        }
    }

    bool isValid(int x, int y) {
        return x >= 0 && x < R && y >= 0 && y < C;
    }

private:
    int R, C;
    vector<vector<bool>> visit;
    const vector<Point> DIRS = {{-1, 0}, {1, 0}, {0, -1}, {0, 1}};
};