
/**
 * 并查集
 * 
 * 时间：64ms
 */

#include <vector>
#include <string>
using namespace std;

class UnionFind {
public:
    UnionFind(int size) {
        for (int i = 0; i < size; ++i) {
            parent.push_back(i);
        }
        rank = vector<int>(size, 1);
    }

    void merge(int i, int j) {
        int ii = getRoot(i);
        int jj = getRoot(j);
        if (ii == jj) return;

        if (rank[ii] <= rank[jj]) {
            parent[ii] = jj;
            if (rank[ii] == rank[jj]) {
                ++rank[jj];
            }
        } else {
            parent[jj] = ii;
        }
    }

    int getRoot(int x) {
        if (parent[x] == x) return x;
        return parent[x] = getRoot(parent[x]); // 路径压缩
    }
    
private:
    vector<int> parent;
    vector<int> rank;
};

const vector<vector<int>> DIRS = {
    {-1, 0, 0, 2}, // { 格子x偏移，格子y偏移，小格子偏移，相邻小格子偏移 }
    {1, 0, 2, 0},
    {0, -1, 3, 1},
    {0, 1, 1, 3}
};

class Solution {
public:
    int regionsBySlashes(vector<string>& grid) {
        const int n = grid.size();
        UnionFind uf(n * n * 4); // 每个格子分为4个小格子

        for (int i = 0; i < n; ++i) {
            for (int j = 0; j < n; ++j) {
                char ch = grid[i][j];
                int k = 4 * (i * n + j); // 小格子起始下标

                // 格子内部的连通性
                if (ch != '\\') {
                    uf.merge(k, k + 3);
                    uf.merge(k + 1, k + 2);
                }
                if (ch != '/') {
                    uf.merge(k, k + 1);
                    uf.merge(k + 2, k + 3);
                }

                // 当前格子与相邻格子的连通性
                for (auto dir : DIRS) {
                    int ii = i + dir[0];
                    int jj = j + dir[1];
                    if (ii >= 0 && ii < n && jj >= 0 && jj < n) {
                        uf.merge(k + dir[2], 4 * (ii * n + jj) + dir[3]);
                    }
                }
            }
        }

        unordered_set<int> roots;
        for (int i = n * n * 4 - 1; i >= 0; --i) {
            roots.insert(uf.getRoot(i));
        }
        return roots.size();
    }
};