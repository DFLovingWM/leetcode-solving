/**
 * BFS：状态为三维(x, y, k)
 */

#include <vector>
#include <algorithm>
#include <queue>
using namespace std;

const vector<vector<int>> DIRS = {
    {-1, 0},
    {0, -1},
    {1, 0},
    {0, 1}
};

struct Node {
    int x, y, k, step;
    Node(int x, int y, int k, int step) : x(x), y(y), k(k), step(step) {}
};

class Solution {
public:
    int shortestPath(vector<vector<int>>& grid, int k) {
        m = grid.size();
        n = grid[0].size();

        // Edge case：起点即终点
        if (isEnd(0, 0)) return 0;

        vector<vector<vector<int>>> visit(m, vector<vector<int>>(n, vector<int>(k + 1, 0))); // （三维）是否已遍历
        queue<Node> Q;

        Q.push(Node(0, 0, k, 0));
        visit[0][0][k] = 1;

        while (!Q.empty()) {
            Node curr = Q.front(); Q.pop();
            if (isEnd(curr.x, curr.y)) return curr.step;

            for (auto dir : DIRS) {
                int nx = curr.x + dir[0];
                int ny = curr.y + dir[1];
                if (!isValid(nx, ny)) continue;
                if (grid[nx][ny] == 0 && !visit[nx][ny][curr.k]) {
                    Node nextNode(nx, ny, curr.k, curr.step + 1);
                    visit[nx][ny][curr.k] = 1;
                    Q.push(nextNode);
                } else if (grid[nx][ny] == 1 && curr.k >= 1 && !visit[nx][ny][curr.k - 1]) {
                    Node nextNode(nx, ny, curr.k - 1, curr.step + 1);
                    visit[nx][ny][curr.k - 1] = 1;
                    Q.push(nextNode);
                }
            }
        }

        return -1;
    }

    bool isValid (int x, int y) {
        return x >= 0 && x < m && y >= 0 && y < n;
    }

    bool isEnd (int x, int y) {
        return x == m - 1 && y == n - 1;
    }
private:
    int m, n;
};