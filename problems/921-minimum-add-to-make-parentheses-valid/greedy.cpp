/**
 * 贪心：
 * 
 * 时间：`O(N)`, 0ms
 */

#include <string>
using namespace std;

class Solution {
public:
    int minAddToMakeValid(string S) {
        int delta = 0;
        int res = 0;

        for (char ch : S) {
            if (ch == '(') {
                ++delta;
            } else if (ch == ')') {
                --delta;
                if (delta == -1) { // 当前右括号更多，必须添加1个左括号
                    ++res;
                    delta = 0;
                }
            }
        }
        res += delta;

        return res;
    }
};