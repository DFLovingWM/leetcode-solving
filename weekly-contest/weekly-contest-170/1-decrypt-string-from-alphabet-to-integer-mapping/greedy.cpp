/**
 * 贪心：先检测“10# ~ 26#”，再检测“1 ~ 9”
 */

#include <string>
using namespace std;

class Solution {
public:
    string freqAlphabets(string s) {
        string res;
        const int n = s.size();
        for (int i = 0; i < n; ) {
            if (i + 2 < n && s[i + 2] == '#') {
                int m = 0;
                m = m * 10 + s[i] - '0';
                m = m * 10 + s[i + 1] - '0';
                res += 'a' + m - 1;
                i += 3;
            } else {
                res += s[i] - '0' + 'a' - 1;
                i += 1;
            }
        }
        return res;
    }
};