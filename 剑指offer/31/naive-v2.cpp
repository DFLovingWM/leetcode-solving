/**
 * 模拟（以pushed为基准）
 * 
 * 时间：O(N), 12ms
 * 空间：O(N), 9.1MB
 */

class Solution {
public:
    bool validateStackSequences(vector<int>& pushed, vector<int>& popped) {
        stack<int> st;
        int i = 0;
        for (int n : pushed) {
            st.push(n);
            // 检测是否要吐数字
            while (!st.empty() && i < popped.size() && st.top() == popped[i]) {
                ++i;
                st.pop();
            }
        }
        return st.empty(); // 如果最终吐完了，才成功
    }
};