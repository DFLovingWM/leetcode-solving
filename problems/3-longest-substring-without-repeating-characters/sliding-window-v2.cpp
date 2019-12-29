/**
 * 使用哈希表：存储字符的最新位置，让j可以快速跳转。但是该哈希表维护的并不是窗口中的字符，还需要配合`j`来判断。
 */

#include <iostream>
#include <string>
#include <algorithm>
#include <unordered_map>
using namespace std;

class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        unordered_map<char, int> ch2Index; // 字符 => 最新的位置。注意这里不一定是窗口中的字符，还需要配合`j`来判断
        int j = 0;
        int res = 0;

        for (int i = 0; i < s.size(); ++i) {
            // 不合法：如果窗口中有重复，则收敛(j跳转到上一个位置的右边)
            if (ch2Index.count(s[i]) && ch2Index[s[i]] >= j) {
                j = ch2Index[s[i]] + 1;
            }
            
            // 合法
            ch2Index[s[i]] = i;
            res = max(res, i - j + 1);
        }

        return res;
    }
};