/**
 * 时间：O(N), 0ms
 */

class Solution {
public:
    int findLUSlength(string A, string B) {
        const int a = A.size(), b = B.size();
        if (a != b) return max(a, b); // 如果长度不相等，则取更长的作为LUS
        return A == B ? -1 : a; // 长度相等时，看字符串是否相等，如果相等则不存在，否则随便取一个
    }
};