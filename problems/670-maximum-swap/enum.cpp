/**
 * 枚举所有可能的数字，取最大值
 * 
 * 时间：`O(M^2)`, 4ms
 */

class Solution {
public:
    int maximumSwap(int num) {
        string S = to_string(num);
        string res;
        const int n = S.size();
        for (int i = 0; i < n; ++i) {
            for (int j = 0; j < n; ++j) {
                // 尝试交换
                swap(S, i, j);
                if (S > res) res = S;
                // 回复
                swap(S, i, j);
            }
        }
        return stoi(res);
    }

    void swap(string &S, int i, int j) {
        auto ch = S[i];
        S[i] = S[j];
        S[j] = ch;
    }
};