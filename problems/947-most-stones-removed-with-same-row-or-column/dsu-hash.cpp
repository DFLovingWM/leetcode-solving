/**
 * 并查集 + 哈希
 * 
 * 时间：`O(N)`, 56ms
 */

#include <vector>
#include <unordered_set>
#include <unordered_map>
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

        // 哈希
        vector<int> xs[10000];
        vector<int> ys[10000];
        for (int i = 0; i < n; ++i) {
            int x = stones[i][0];
            int y = stones[i][1];
            xs[x].push_back(i);
            ys[y].push_back(i);
        }

        // 合并
        UnionFind uf(n);
        for (int x = 0; x < 10000; ++x) {
            if (xs[x].size() == 0) continue;
            int index0 = xs[x][0];
            for (int i = 1; i < xs[x].size(); ++i) {
                int index = xs[x][i];
                uf.merge(index0, index);
            }
        }
        for (int y = 0; y < 10000; ++y) {
            if (ys[y].size() == 0) continue;
            int index0 = ys[y][0];
            for (int i = 1; i < ys[y].size(); ++i) {
                int index = ys[y][i];
                uf.merge(index0, index);
            }
        }

        unordered_set<int> roots;
        for (int i = 0; i < n; ++i) {
            roots.insert(uf.getRoot(i));
        }
        return n - roots.size();
    }
};