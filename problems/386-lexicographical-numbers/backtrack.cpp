/**
 * 回溯（DFS能保证字典序）
 * 
 * 时间：`O()`, 8ms
 */

class Solution {
public:
    vector<int> lexicalOrder(int n) {
        N = n;
        // 最高位不能为0，只能是1～9
        for (int i = 1; i <= min(9, n); ++i) {
            backtrack(i);
        }
        return res;
    }

    void backtrack(int curr) {
        res.push_back(curr);
        // 之后的位置上可以是0～9
        for (int i = 0; i <= 9; ++i) {
            int next = curr * 10 + i;
            if (next > N) break; // 剪枝
            backtrack(next);
        }
    }

private:
    int N;
    vector<int> res;
};