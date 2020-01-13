/**
 * 并查集：200ms
 */

#include <iostream>
#include <vector>
#include <tuple>
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
    int makeConnected(int n, vector<vector<int>>& connections) {
        if (connections.size() < n - 1) return -1;

        UnionFind uf(n);
        for (auto conn : connections) {
            int a = conn[0];
            int b = conn[1];
            uf.merge(a, b);
        }

        unordered_set<int> roots;
        for (int i = 0; i < n; ++i) {
            roots.insert(uf.getRoot(i));
        }
        return roots.size() - 1;
    }
};