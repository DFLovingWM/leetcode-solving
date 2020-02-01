/**
 * BFS + 岛屿形状哈希
 * 
 * 时间：`O(N^2)`, 108ms
 */

typedef vector<int> Point;

class Solution {
public:
    int numDistinctIslands(vector<vector<int>>& grid) {
        R = grid.size();
        C = grid[0].size();
        visit = vector<vector<bool>>(R, vector<bool>(C, false));
        unordered_set<string> islands;
        for (int i = 0; i < R; ++i) {
            for (int j = 0; j < C; ++j) {
                if (grid[i][j] == 1 && !visit[i][j]) {
                    islands.insert(bfs(grid, i, j));
                }
            }
        }
        return islands.size();
    }

    // BFS(着色)
    string bfs(vector<vector<int>>& grid, int startX, int startY) {
        queue<Point> Q;
        vector<Point> points;

        visit[startX][startY] = true;
        Q.push({startX, startY});

        while (!Q.empty()) {
            auto curr = Q.front(); Q.pop();
            int x = curr[0];
            int y = curr[1];
            points.push_back({x, y});

            for (auto &dir : DIRS) {
                int nx = x + dir[0];
                int ny = y + dir[1];
                if (isValid(nx, ny) && grid[nx][ny] == 1 && !visit[nx][ny]) {
                    visit[nx][ny] = true;
                    Q.push({nx, ny});
                }
            }
        }

        // 将岛屿上的点排序
        sort(points.begin(), points.end(), [&](const Point &A, const Point &B) {
            if (A[0] != B[0]) return A[0] < B[0];
            return A[1] < B[1];
        });
        // 以第一个点为基准（求出相对位置）
        auto base = points[0];
        for (auto &point : points) {
            point[0] -= base[0];
            point[1] -= base[1];
        }
        // 化为字符串
        string res;
        for (auto &point : points) {
            res += "(" + to_string(point[0]) + "," + to_string(point[1]) + ")";
        }

        return res;
    }

    bool isValid(int x, int y) {
        return x >= 0 && x < R && y >= 0 && y < C;
    }

private:
    int R, C;
    vector<vector<bool>> visit;
    const vector<Point> DIRS = {{-1, 0}, {1, 0}, {0, -1}, {0, 1}};
};