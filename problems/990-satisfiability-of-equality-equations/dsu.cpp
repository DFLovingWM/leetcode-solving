/**
 * 并查集
 * 
 * 时间：`O(N)`, 12ms
 */

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

    bool same(int i, int j) {
        int ii = getRoot(i);
        int jj = getRoot(j);
        return ii == jj;
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
    bool equationsPossible(vector<string>& equations) {
        UnionFind uf(26);
        for (auto &equation : equations) {
            int x = equation[0] - 'a';
            int y = equation[3] - 'a';
            if (equation[1] == '=') {
                uf.merge(x, y);
            }
        }
        for (auto &equation : equations) {
            int x = equation[0] - 'a';
            int y = equation[3] - 'a';
            if (equation[1] == '!') {
                if (uf.same(x, y)) return false;
            }
        }
        return true;
    }
};