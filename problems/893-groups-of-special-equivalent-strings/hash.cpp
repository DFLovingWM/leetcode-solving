/**
 * 哈希
 * 
 * 时间：O(NL), 120ms
 */

class Solution {
public:
    int numSpecialEquivGroups(vector<string>& strs) {
        unordered_set<string> hashSet;
        for (auto &str : strs) {
            hashSet.insert(getHash(str));
        }
        return hashSet.size();
    }

    string getHash(string &str) {
        unordered_map<char, int> oddFreq, evenFreq;
        for (int i = 0; i < str.size(); ++i) {
            if (i & 1) {
                ++oddFreq[str[i]];
            } else {
                ++evenFreq[str[i]];
            }
        }

        string res;
        // 拼奇数
        for (int i = 0; i < 26; ++i) {
            char ch = i + 'a';
            res += "," + oddFreq.count(ch) ? oddFreq[ch] : 0;
        }
        // 拼偶数
        for (int i = 0; i < 26; ++i) {
            char ch = i + 'a';
            res += "," + evenFreq.count(ch) ? evenFreq[ch] : 0;
        }

        return res;
    }
};