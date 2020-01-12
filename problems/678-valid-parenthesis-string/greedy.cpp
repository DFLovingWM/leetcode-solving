/**
 * 贪心（delta法）
 * 
 * 时间：`O(N)`, 4ms
 */

#include <string>
#include <vector>
using namespace std;

class Solution {
public:
    bool checkValidString(string s) {
        int L = 0, R = 0; // 维护当前左括号的数量范围：[L, R]

        for (char ch : s) {
            if (ch == '(') {
                ++L;
                ++R;
            } else if (ch == ')') {
                if (L > 0) --L;
                if (R > 0) {
                    --R;
                } else {
                    return false; // R即将为负数，表示右括号一定更多 => 失败
                }
            } else if (ch == '*') {
                if (L > 0) --L;
                ++R;
            }
        }

        return L <= 0 && 0 <= R; // 最后要能取到0
    }
};