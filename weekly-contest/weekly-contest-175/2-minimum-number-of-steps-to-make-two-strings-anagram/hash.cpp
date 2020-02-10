class Solution {
public:
    int minSteps(string s, string t) {
        unordered_map<char, int> S; // 频次
        for (char ch : s) {
            ++S[ch];
        }

        // 排除
        for (char ch : t) {
            if (S.count(ch) && S[ch] > 0) {
                --S[ch];
            }
        }

        // 剩余
        int res = 0;
        for (auto &p : S) {
            res += p.second;
        }
        return res;
    }
};