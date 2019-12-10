#include <iostream>
#include <queue>
#include <unordered_set>
using namespace std;

struct cmp {
    bool operator()(const vector<int> &a, const vector<int> &b) {
        return a[2] >= b[2];
    }
};

class Solution {
public:
    int shortestDistance(vector<vector<int>>& maze, vector<int>& start, vector<int>& end) {
        r = maze.size();
        c = maze[0].size();
        const int MAX_DIST = r * c + 1;

        unordered_set<int> visit; // 标记是否已遍历
        vector<int> dist(r * c, MAX_DIST); // 到各点的最小距离

        return bfs(maze, visit, dist, start, end);
    }

    int bfs (vector<vector<int>>& maze, unordered_set<int>& visit, vector<int>& dist, vector<int>& start, vector<int>& end) {
        priority_queue<vector<int>, vector<vector<int>>, cmp> pq;

        int sx = start[0], sy = start[1];
        pq.push({sx, sy, 0});
        const int sKey = getHash(sx, sy);
        dist[sKey] = 0;

        while (!pq.empty()) {
            auto curr = pq.top(); pq.pop();
            const int key = getHash(curr[0], curr[1]);

            if (visit.count(key)) continue; // 已遍历，则忽略（每个结点挑最小的距离，故只会遍历1次）

            visit.insert(key); // 标记已遍历
            for (auto dir : DIRS) {
                // 走到尽头
                int acc = 0;
                int nx = curr[0], ny = curr[1];
                while (isValid(nx + dir[0], ny + dir[1]) && maze[nx + dir[0]][ny + dir[1]] == 0) {
                    ++acc;
                    nx += dir[0];
                    ny += dir[1];
                }

                // 松弛
                const int nextKey = getHash(nx, ny);
                if (dist[key] + acc < dist[nextKey]) {
                    dist[nextKey] = dist[key] + acc;
                    if (nx == end[0] && ny == end[1]) return dist[nextKey];
                    pq.push({nx, ny, dist[nextKey]});
                }
            }
        }

        return -1;
    }

    inline bool isValid (int x, int y) {
        return x >= 0 && x < r && y >= 0 && y < c;
    }

    inline int getHash (int x, int y) {
      return x * c + y;
    }
private:
    int r, c;
    const vector<vector<int>> DIRS = {{-1,0},{0,-1},{1,0},{0,1}};
};