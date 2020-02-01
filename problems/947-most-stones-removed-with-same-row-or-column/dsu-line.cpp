/**
 * 并查集 + 线
 * 
 * 时间：`O(N)`, 56ms
 */

#include <vector>
#include <unordered_set>
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

class Solution {
public:
    int removeStones(vector<vector<int>>& stones) {
        const int n = stones.size();

        // 合并行与列
        UnionFind uf(20000);
        for (auto &stone : stones) {
            int x = stone[0];
            int y = stone[1] + 10000; // 这里哈希到10000以外，为了将行与列的空间区分开
            uf.merge(x, y); // 对于一个点来说，它同时处于x、y，所以将二者合并
        }

        unordered_set<int> roots;
        for (int i = 0; i < n; ++i) {
            int x = stones[i][0];
            roots.insert(uf.getRoot(x)); // 这里只需要x，因为x和y处于同一个连通分量
        }
        return n - roots.size();
    }
};