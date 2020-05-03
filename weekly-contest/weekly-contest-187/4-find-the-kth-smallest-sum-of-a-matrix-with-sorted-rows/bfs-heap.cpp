/**
 * BFS + 最大堆
 * 参考：https://leetcode-cn.com/problems/find-the-kth-smallest-sum-of-a-matrix-with-sorted-rows/solution/java-bfs-zui-xiao-dui-by-bran_wang/
 * 
 * 时间：O(KM), 1228ms
 */

struct State {
    int sum;
    vector<int> index;

    State(int s, vector<int> i) {
        sum = s;
        index = i;
    }

    string getHash() {
        string res;
        for (auto i : index) {
            res += to_string(i) + ",";
        }
        return res;
    }
};

struct cmp {
    bool operator()(const State& A, const State& B) {
        return A.sum > B.sum;
    }
};



class Solution {
public:
    int kthSmallest(vector<vector<int>>& mat, int K) {
        const int m = mat.size();
        const int n = mat[0].size();
        priority_queue<State, vector<State>, cmp> Q; // BFS队列
        unordered_set<string> visit; // 标记状态是否遍历过，防止重复遍历

        // 初始状态：所有行的第一列组成的数组
        int sum = 0;
        vector<int> index(m);
        for (int i = 0; i < m; ++i) {
            sum += mat[i][0];
            index[i] = 1;
        }
        State start(sum, index);
        Q.push(start);
        visit.insert(start.getHash());

        // 迭代(K-1)次即可（否则就炸了）
        for (int k = 1; k < K; ++k) {
            State curr = Q.top(); Q.pop();
            // 下一个状态：当前某一行的指针往前走一步
            // 一共m个
            for (int i = 0; i < m; ++i) {
                if (curr.index[i] < n) { // 下标还能前进
                    vector<int> nextIndex = curr.index;
                    int nextSum = curr.sum - mat[i][nextIndex[i] - 1] + mat[i][nextIndex[i]];
                    ++nextIndex[i];
                    State next(nextSum, nextIndex);
                    string h = next.getHash();
                    if (!visit.count(h)) {
                        Q.push(next);
                        visit.insert(h);
                    }
                }
            }
        }
        return Q.top().sum;
    }
};