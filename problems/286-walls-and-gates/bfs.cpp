/**
 * 逆向思维的BFS
 * 
 * 时间：`O(NM)`, 60ms
 */

class Solution {
public:
    void wallsAndGates(vector<vector<int>>& rooms) {
        const int R = rooms.size();
        if (R == 0) return;

        const int C = rooms[0].size();
        vector<vector<int>> currs;

        for (int i = 0; i < R; ++i) {
            for (int j = 0; j < C; ++j) {
                if (rooms[i][j] == 0) {
                    currs.push_back({ i, j });
                }
            }
        }

        for (int d = 1; currs.size() > 0; ++d) {
            vector<vector<int>> nexts;
            for (auto &curr : currs) {
                for (auto &dir : DIRS) {
                    int nx = dir[0] + curr[0];
                    int ny = dir[1] + curr[1];
                    if (nx >= 0 && nx < R && ny >= 0 && ny < C && rooms[nx][ny] == INF) {
                        rooms[nx][ny] = d; // 修改为BFS层数
                        nexts.push_back({nx, ny});
                    }
                }
            }
            currs = nexts;
        }
    }

private:
    const int INF = 2147483647;
    int DIRS[4][2] = {{-1, 0}, {1, 0}, {0, 1}, {0, -1}};
};