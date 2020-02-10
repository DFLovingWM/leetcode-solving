/**
 * 哈希：字符种类数为52，可以哈希成long long
 * 
 * 时间：O(NL), 12ms
 */

typedef unsigned long long ULL;

class Solution {
public:
    int numSpecialEquivGroups(vector<string>& strs) {
        unordered_set<ULL> hashSet;
        for (auto &str : strs) {
            hashSet.insert(getHash(str));
        }
        return hashSet.size();
    }

    ULL getHash(string &str) {
        ULL res = 0;
        for (int i = 0; i < str.size(); ++i) {
            int b = str[i] - 'a';
            if (i % 2 == 1) {
                b += 26;
            }
            res += (ULL) 1 << b;
        }
        return res;
    }
};