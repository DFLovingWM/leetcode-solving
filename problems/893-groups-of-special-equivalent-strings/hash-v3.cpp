/**
 * 哈希
 * 
 * 时间：O(NL), 12ms
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
        string odd, even;
        for (int i = 0; i < str.size(); ++i) {
            if (i & 1) {
                odd.push_back(str[i]);
            } else {
                even.push_back(str[i]);
            }
        }
        sort(odd.begin(), odd.end());
        sort(even.begin(), even.end());
        return odd + "," + even;
    }
};