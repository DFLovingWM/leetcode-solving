/**
 * 并查集
 * 
 * 时间：1320ms
 */

#include <vector>
#include <string>
#include <unordered_map>
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
    int numSimilarGroups(vector<string>& words) {
        const int n = words.size(); // 单词个数
        const int w = words[0].size(); // 单词长度
        UnionFind uf(n);

        if (n < w * w) { // 两两配对，构建并查集
            for (int i = 0; i < n; ++i) {
                for (int j = i + 1; j < n; ++j) {
                    if (isSimilar(words[i], words[j])) {
                        uf.merge(i, j); // 下标
                    }
                }
            }
        } else { // 对每个单词，找邻居单词
            unordered_map<string, int> word2Index;
            for (int i = 0; i < n; ++i) {
                word2Index[words[i]] = i;
            }
            for (int i = 0; i < n; ++i) {
                for (string neighbor : getNeighbors(words[i], word2Index)) {
                    int j = word2Index[neighbor];
                    uf.merge(i, j);
                }
            }
        }

        // 数连通分量
        unordered_set<int> roots;
        for (int i = 0; i < n; ++i) {
            roots.insert(uf.getRoot(i));
        }
        return roots.size();
    }

    bool isSimilar(string &A, string &B) {
        if (A.size() != B.size()) return false;

        vector<int> ds;
        for (int i = 0; i < A.size(); ++i) {
            if (A[i] != B[i]) {
                ds.push_back(i);
                if (ds.size() > 2) return false;
            }
        }

        return ds.size() == 0 || // 相同
            (ds.size() == 2 && A[ds[0]] == B[ds[1]] && A[ds[1]] == B[ds[0]]); // 交换一次
    }

    unordered_set<string> getNeighbors(string &word, unordered_map<string, int> &word2Index) {
        unordered_set<string> res;
        const int w = word.size();

        // 挑选两个不同的下标，进行字符交换
        for (int i = 0; i < w; ++i) {
            for (int j = i + 1; j < w; ++j) {
                string neighbor = word;
                char tmp = neighbor[i];
                neighbor[i] = neighbor[j];
                neighbor[j] = tmp;
                if (word2Index.count(neighbor)) { // 同时需要保证：该邻居单词存在于给定单词列表中
                    res.insert(neighbor);
                }
            }
        }
        
        return res;
    }
};