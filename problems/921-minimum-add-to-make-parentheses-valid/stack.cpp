/**
 * 栈（贪心/消消乐）
 * 
 * 时间：`O(N)`, 4ms
 */

#include <string>
#include <stack>
using namespace std;

class Solution {
public:
    int minAddToMakeValid(string S) {
        stack<char> st;
        for (char ch : S) {
            if (!st.empty() && st.top() == '(' && ch == ')') { // 栈顶匹配
                st.pop();
            } else {
                st.push(ch);
            }
        }
        return st.size();
    }
};