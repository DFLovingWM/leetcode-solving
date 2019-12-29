/**
 * 使用集合：维护窗口中的字符集。
 */

#include <iostream>
#include <string>
#include <algorithm>
#include <unordered_set>
using namespace std;

class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        unordered_set<char> exist;
        int j = 0;
        int res = 0;

        for (int i = 0; i < s.size(); ++i) {
            // 不合法：存在重复，则收敛(j跳转到上一个位置的右边)
            if (exist.count(s[i])) {
                for (; s[j] != s[i]; ++j) {
                    exist.erase(s[j]);
                }
                exist.erase(s[j++]);
            }
            
            // 合法
            exist.insert(s[i]);
            res = max(res, i - j + 1);
        }

        return res;
    }
};