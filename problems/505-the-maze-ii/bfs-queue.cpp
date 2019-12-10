#include <iostream>
#include <queue>
using namespace std;

class Solution {
public:
    int shortestDistance(vector<vector<int>>& maze, vector<int>& start, vector<int>& end) {
        r = maze.size();
        c = maze[0].size();
        const int MAX_DIST = r * c + 1;
        vector<vector<int>> dist(r, vector<int>(c, MAX_DIST)); // 最小距离，不断更新
        bfs(maze, dist, start[0], start[1]);
        return dist[end[0]][end[1]] == MAX_DIST ? -1 : dist[end[0]][end[1]];
    }

    void bfs (vector<vector<int>>& maze, vector<vector<int>>& dist, int sx, int sy) {
        queue<vector<int>> queue;

        dist[sx][sy] = 0;
        queue.push({sx, sy});

        while (!queue.empty()) {
            auto curr = queue.front(); queue.pop();
            int x = curr[0], y = curr[1];

            for (auto dir : DIRS) {
                // 走到尽头
                int acc = 0;
                int nx = x, ny = y;
                while (isValid(nx + dir[0], ny + dir[1]) && maze[nx + dir[0]][ny + dir[1]] == 0) {
                    ++acc;
                    nx += dir[0];
                    ny += dir[1];
                }

                // 松弛
                if (dist[x][y] + acc < dist[nx][ny]) {
                    dist[nx][ny] = dist[x][y] + acc;
                    queue.push({nx, ny});
                }
            }
        }
    }

    inline bool isValid (int x, int y) {
        return x >= 0 && x < r && y >= 0 && y < c;
    }
private:
    int r, c;
    const vector<vector<int>> DIRS = {{-1,0},{0,-1},{1,0},{0,1}};
};