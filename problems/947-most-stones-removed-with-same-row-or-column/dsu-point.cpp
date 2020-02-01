/**
 * 并查集 + 两两配对
 * 
 * 时间：`O(N^2)`, 116ms
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

        // 两两配对，构造并查集
        UnionFind uf(n);
        for (int i = 0; i < n; ++i) {
            for (int j = i + 1; j < n; ++j) {
                if (isSameRowOrCol(stones[i], stones[j])) {
                    uf.merge(i, j);
                }
            }
        }

        unordered_set<int> roots;
        for (int i = 0; i < n; ++i) {
            roots.insert(uf.getRoot(i));
        }
        return n - roots.size();
    }

    bool isSameRowOrCol(vector<int> &A, vector<int> &B) {
        return A[0] == B[0] || A[1] == B[1];
    }
};