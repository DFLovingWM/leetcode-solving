/**
 * BFS + 双端队列
 * 
 * 时间：64ms
 * 空间：19.4MB
 */

#include <vector>
#include <deque>
using namespace std;

// 状态
struct Node {
  int row, col; // 行与列（坐标）
  int step; // 步数
  Node(int r, int c, int s): row(r), col(c), step(s) {}
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

      deque<Node> D; // 双端队列
      vector<vector<bool>> visit(m, vector<bool>(n, false)); // 某点是否已遍历

      D.push_back(Node(0, 0, 0));

      while (!D.empty()) {
        Node curr = D.front(); D.pop_front();
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

        // 扩展子结点
        for (int k = 1; k <= 4; ++k) {
          auto dir = DIRS[k];
          int nr = r + dir[0];
          int nc = c + dir[1];
          if (nr < 0 || nr >= m || nc < 0 || nc >= n) continue;

          if (k == grid[r][c]) { // 0
            D.push_front(Node(nr, nc, s));
          } else { // 1
            D.push_back(Node(nr, nc, s + 1));
          }
        }
      }

      return -1;
    }
};