#include <iostream>
#include <string>
#include <queue>
#include <unordered_set>

using namespace std;

struct Node {
    int x, y;
    string path;

    Node(int x, int y, string path): x(x), y(y), path(path) {}
};

struct cmp {
    bool operator()(const Node &a, const Node &b) {
        return a.path >= b.path;
    }
};

class Solution {
public:
    string findShortestWay(vector<vector<int>>& maze, vector<int>& start, vector<int>& end) {
        r = maze.size();
        c = maze[0].size();

        vector<vector<int>> visit(r, vector<int>(c, 0)); // 是否已遍历
        vector<vector<string>> dist(r, vector<string>(c, "z")); // 到该点的最小路径

        return bfs(maze, visit, dist, start, end);
    }

    string bfs (vector<vector<int>>& maze, vector<vector<int>>& visit, vector<vector<string>>& dist, vector<int>& start, vector<int>& end) {
        priority_queue<Node, vector<Node>, cmp> pq;

        int sx = start[0], sy = start[1];
        pq.push(Node(sx, sy, ""));
        dist[sx][sy] = "";

        while (!pq.empty()) {
            auto curr = pq.top(); pq.pop();
            if (visit[curr.x][curr.y]) continue; // 已遍历，则忽略（每个结点挑最小的距离，故只会遍历1次）

            visit[curr.x][curr.y] = 1; // 标记已遍历
            for (int k = 0; k < 4; ++k) {
                const vector<int> dir = DIRS[k];
                const string ch = DIR_STRS[k];

                // 走到尽头，或到达终点
                bool reachEnd = false;
                int nx = curr.x, ny = curr.y;
                while (isValid(nx + dir[0], ny + dir[1]) && maze[nx + dir[0]][ny + dir[1]] == 0) {
                    nx += dir[0];
                    ny += dir[1];
                    if (nx == end[0] && ny == end[1]) reachEnd = true;
                }

                // 松弛
                if (dist[curr.x][curr.y] + ch < dist[nx][ny]) {
                  dist[nx][ny] = dist[curr.x][curr.y] + ch;
                  if (reachEnd) return dist[nx][ny];
                }
            }
        }

        return "impossible";
    }

    inline bool isValid (int x, int y) {
        return x >= 0 && x < r && y >= 0 && y < c;
    }
private:
    int r, c;
    const vector<vector<int>> DIRS = {{1, 0}, {0, -1}, {0, 1}, {-1, 0}}; // 注：有优先级
    const vector<string> DIR_STRS = {"d", "l", "r", "u"};
};