/**
 * 哈希：将J存到哈希表中，以快速判断
 * 
 * 时间：`O(J + S)`, 8ms
 */

class Solution {
public:
    int numJewelsInStones(string J, string S) {
        unordered_set<char> jewel(J.begin(), J.end());
        int res = 0;
        for (char ch : S) {
            if (jewel.count(ch)) {
                ++res;
            }
        }
        return res;
    }
};