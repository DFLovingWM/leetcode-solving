/**
 * Top-down DP
 * 
 * 时间：`O(N^2)`, 24ms
 * 空间：`O(N)`, 15MB
 */

class Solution {
public:
    bool canWin(string S) {
        if (memo.count(S)) return memo[S];

        bool res = false;
        for (int i = 0; i + 1 < S.size(); ++i) {
            if (S[i] == '+' && S[i + 1] == '+') { // '++'
                string T(S);
                T[i] = T[i + 1] = '-';
                if (!canWin(T)) { // 存在对方不能赢的情况
                    res = true;
                    break;
                }
            }
        }
        return memo[S] = res;
    }

private:
    unordered_map<string, bool> memo;
};