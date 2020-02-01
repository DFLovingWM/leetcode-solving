// 基于字符串的并查集
class UnionFind {
public:
    UnionFind() {}

    void merge(string &x, string &y) {
        string xx = getRoot(x);
        string yy = getRoot(y);
        if (xx == yy) return;

        if (rank[xx] <= rank[yy]) {
            father[xx] = yy;
            if (rank[xx] == rank[yy]) {
                ++rank[yy];
            }
        } else {
            father[yy] = xx;
        }
    }

    string getRoot(string &x) {
        if (!father.count(x)) { // Lazy
            father[x] = x;
            rank[x] = 1;
        }

        if (father[x] == x) return x;
        return father[x] = getRoot(father[x]);
    }

private:
    unordered_map<string, string> father;
    unordered_map<string, int> rank;
};