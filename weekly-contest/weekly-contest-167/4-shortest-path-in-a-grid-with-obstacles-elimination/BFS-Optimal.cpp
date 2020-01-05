/**
 * BFS（优化）
 * 
 * 时间：92ms
 */

#include <vector>
using namespace std;

typedef tuple<int, int, int> Node;

class Solution {
public:
    int shortestPath(vector<vector<int>>& grid, int K) {
        R = grid.size();
        C = grid[0].size();
        vector<Node> currs; // 队列
        vector<vector<int>> need(R, vector<int>(C, K + 1)); // 坐标 => 当前所需消除数（剪枝：消除数只能更少）

        currs.push_back({0, 0, 0});
        need[0][0] = 0;

        for (int level = 0; currs.size() > 0; ++level) {
            vector<Node> nexts;
            for (auto node : currs) {
                int x, y, k;
                tie(x, y, k) = node;
                
                if (x == R - 1 && y == C - 1) return level;

                for (auto dir : DIRS) {
                    int nx = x + dir[0];
                    int ny = y + dir[1];
                    if (!isValid(nx, ny)) continue; // 不合法位置 => 忽略
                    int nk = k + grid[nx][ny];
                    if (nk > K) continue; // 超出限定消除数 => 忽略
                    if (nk >= need[nx][ny]) continue; // 剪枝：如果同一个位置所需消除数没有减少，则可以抛弃
                    nexts.push_back({ nx, ny, nk });
                    need[nx][ny] = nk;
                }
            }
            currs = nexts;
        }

        return -1;
    }

    bool isValid (int x, int y) {
        return x >= 0 && x < R && y >= 0 && y < C;
    }

private:
    const vector<vector<int>> DIRS = {{-1, 0}, {0, -1}, {1, 0}, {0, 1}};
    int R, C;
};