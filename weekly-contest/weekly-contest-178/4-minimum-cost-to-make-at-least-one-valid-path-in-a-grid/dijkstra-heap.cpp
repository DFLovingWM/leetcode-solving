/**
 * Dijkstra（二叉堆优化）
 * 
 * 时间：80ms
 * 空间：13.5MB
 */

#include <vector>
#include <queue>
using namespace std;

// 状态
struct Node {
  int row, col; // 行与列（坐标）
  int step; // 步数
  Node(int r, int c, int s): row(r), col(c), step(s) {}
};

// 比较函数
struct Comparator {
  bool operator()(Node &A, Node &B) {
    return A.step > B.step; // 步数更少优先
  }
};

// 定义4个方向（要与题意一致）
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
      const int m = grid.size();
      const int n = grid[0].size();

      priority_queue<Node, vector<Node>, Comparator> Q;
      vector<vector<int>> dist(m, vector<int>(n, INT_MAX)); // 原点到某点的最小距离
      vector<vector<bool>> visit(m, vector<bool>(n, false)); // 某点是否已遍历

      Node start(0, 0, 0);
      dist[0][0] = 0;
      Q.push(start);

      while (!Q.empty()) {
        Node curr = Q.top(); Q.pop();
        const int r = curr.row, c = curr.col, s = curr.step;

        // 如果已经遍历过，就忽略
        // 即对于(r, c)来说，dist[r][c]一定是最小距离，优先队列保证了重复时不可能更小
        if (visit[r][c]) {
          continue;
        }
        // 遇到终点，可以提前结束算法
        if (r == m - 1 && c == n - 1) {
          return s;
        }

        // 标记该结点
        visit[r][c] = true;
        // dist[r][c] = s; // (1)一般在这里更新

        // 以该结点为基准，进行“松弛”
        for (int k = 1; k <= 4; ++k) {
          auto dir = DIRS[k];
          int nr = r + dir[0];
          int nc = c + dir[1];
          int ns = dist[r][c] + (k == grid[r][c] ? 0 : 1);
          if (nr >= 0 && nr < m && nc >= 0 && nc < n &&
            !visit[nr][nc] && ns < dist[nr][nc]) {
            dist[nr][nc] = ns; // (2)在这里更新也可以，并且比(1)更快一点
            Q.push(Node(nr, nc, ns));
          }
        }
      }

      return -1;
    }
};