/**
 * DFS着色（判断边界）
 * 
 * 时间：`O(N^2)`, 16ms
 */

#include <vector>
#include <iostream>
using namespace std;

class Solution {
public:
    vector<vector<int>> colorBorder(vector<vector<int>>& _grid, int r0, int c0, int _newColor) {
        grid = _grid;
        newColor = _newColor;
        R = grid.size(), C = grid[0].size();

        oldColor = grid[r0][c0];
        if (oldColor == newColor) return grid; // 着相同的色 => 不需要操作

        visited = vector<vector<bool>>(R, vector<bool>(C, false));
        marked = vector<vector<bool>>(R, vector<bool>(C, false));
        dfs(r0, c0);

        // 最后再染色
        for (int i = 0; i < R; ++i) {
            for (int j = 0; j < C; ++j) {
                if (marked[i][j]) {
                    grid[i][j] = newColor;
                }
            }
        }
        return grid;
    }

    void dfs(int x, int y) {
        visited[x][y] = true;

        // 判断(x, y)是否边界
        for (auto &dir : DIRS) {
            int neighborX = x + dir[0];
            int neighborY = y + dir[1];
            if (!isValid(neighborX, neighborY) || grid[neighborX][neighborY] != oldColor) {
                marked[x][y] = true;
                break;
            }
        }

        // 扩展子结点(nextX, nextY)
        for (auto &dir : DIRS) {
            int nextX = x + dir[0];
            int nextY = y + dir[1];
            if (isValid(nextX, nextY) && !visited[nextX][nextY] && grid[nextX][nextY] == oldColor) {
                dfs(nextX, nextY);
            }
        }
    };

    bool isValid(int x, int y) {
        return x >= 0 && x < R && y >= 0 && y < C;
    }

private:
    int R, C, oldColor, newColor;
    vector<vector<bool>> visited; // 是否已遍历
    vector<vector<bool>> marked; // 是否需要着色
    vector<vector<int>> grid;
    const vector<vector<int>> DIRS = {{-1, 0}, {1, 0}, {0, -1}, {0, 1}};
};

// int main() {
//     vector<vector<int>> grid = {{1,2,1,2,1,2},{2,2,2,2,1,2},{1,2,2,2,1,2}};
//     Solution().colorBorder(grid, 1, 3, 1);
//     return 0;
// }
