/**
 * BFS（最短路） + 优先队列
 * 
 * 时间：92ms
 * 空间：14.4MB
 */

#include <vector>
#include <queue>
using namespace std;

struct Node {
  int row, col; // 行与列（坐标）
  int step; // 步数
  Node(int r, int c, int s): row(r), col(c), step(s) {}
};

struct cmp {
  bool operator()(Node &A, Node &B) {
    return A.step > B.step; // 步数更少的优先被遍历（‘>’可能显得奇怪，哈哈）
  }
};

// 定义4个方向，注意要与题意说的一致
const int DIRS[5][2] = {
  {},
  {0, 1},
  {0, -1},
  {1, 0},
  {-1, 0}
};

class Solution {
public:
    int minCost(vector<vector<int>>& grid) {
      const int m = grid.size(), n = grid[0].size();
      priority_queue<Node, vector<Node>, cmp> Q;
      vector<vector<int>> dist(m, vector<int>(n, INT_MAX));

      Node start(0, 0, 0);
      Q.push(start);
      dist[0][0] = 0;

      while (!Q.empty()) {
        Node curr = Q.top(); Q.pop();
        if (curr.row == m - 1 && curr.col == n - 1) {
          return curr.step;
        }

        for (int k = 1; k <= 4; ++k) {
          auto dir = DIRS[k];
          int r = curr.row + dir[0];
          int c = curr.col + dir[1];
          int s = curr.step + (k == grid[curr.row][curr.col] ? 0 : 1);
          if (r >= 0 && r < m && c >= 0 && c < n && s < dist[r][c]) { // 位置合法，而且步数更少（去重）
            dist[r][c] = s;
            Q.push(Node(r, c, s));
          }
        }
      }
      return -1;
    }
};