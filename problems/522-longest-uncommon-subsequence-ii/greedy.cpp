/**
 * 贪心 + 暴力检测
 * 
 * 时间：O(N^2 * L), 8ms
 */

class Solution {
public:
    int findLUSlength(vector<string>& strs) {
        // 计算频次
        unordered_map<string, int> freq;
        for (auto &str : strs) {
            ++freq[str];
        }

        // 排序：按照长度降序
        sort(strs.begin(), strs.end(), [&](const string &A, const string &B) {
            return A.size() > B.size();
        });
        
        // 挑选
        for (int i = 0; i < strs.size(); ++i) {
            if (freq[strs[i]] == 1) { // 频次为1，是候选值
                // 检测会不会是更长串的子序列
                bool isSub = false;
                for (int j = 0; j < i; ++j) {
                    if (strs[j].size() > strs[i].size() && isSubsequence(strs[j], strs[i])) {
                        isSub = true;
                        break;
                    }
                }
                if (!isSub) return strs[i].size();
            }
        }
        return -1;
    }

    // 判断P是否T的子序列：O(T)
    bool isSubsequence(string &T, string &P) {
        int j = 0;
        for (int i = 0; i < T.size(); ++i) {
            if (T[i] == P[j]) {
                ++j;
                if (j >= P.size()) return true;
            }
        }
        return false;
    }
};