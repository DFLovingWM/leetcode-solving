#include <iostream>
#include <vector>
using namespace std;

class Solution {
public:
    int shortestDistance(vector<vector<int>>& maze, vector<int>& start, vector<int>& end) {
        m = maze.size();
        n = maze[0].size();
        const int MAX_DIST = m * n + 1;
        vector<vector<int>> dist(m, vector<int>(n, MAX_DIST));

        dist[start[0]][start[1]] = 0;
        dfs(maze, dist, start[0], start[1]);

        return dist[end[0]][end[1]] == MAX_DIST ? -1 : dist[end[0]][end[1]];
    }

    void dfs (vector<vector<int>>& maze, vector<vector<int>>& dist, int x, int y) {
        for (auto dir : DIRS) {
            // 下一个位置：某个方向走到尽头
            int nx = x;
            int ny = y;
            int acc = 0;
            while (isValid(nx + dir[0], ny + dir[1]) && maze[nx + dir[0]][ny + dir[1]] == 0) {
                nx += dir[0];
                ny += dir[1];
                ++acc;
            }

            // 剪枝：如果能收敛则继续，否则回溯
            if (dist[x][y] + acc < dist[nx][ny]) {
                dist[nx][ny] = dist[x][y] + acc;
                dfs(maze, dist, nx, ny);
            }
        }
    }
private:
    int m, n;
    const vector<vector<int>> DIRS = {{-1, 0}, {0, -1}, {1, 0}, {0, 1}};

    inline bool isValid(int x, int y) {
        return x >= 0 && x < m && y >= 0 && y < n;
    }
};