/**
 * 模拟（以popped为基准）
 * 
 * 时间：O(N), 16ms
 * 空间：O(N), 10.3MB
 */

class Solution {
public:
    bool validateStackSequences(vector<int>& pushed, vector<int>& popped) {
        stack<int> st;
        unordered_set<int> inStack;
        int i = 0;
        for (int num : popped) {
            for (; !inStack.count(num) && i < pushed.size(); ++i) { // 如果不在栈中，则一直push、直到找到它
                st.push(pushed[i]);
                inStack.insert(pushed[i]);
            }
            if (!inStack.count(num)) return false; // 向前找不到目标值 => 失败

            while (true) { // 一直pop、直到找到它
                if (st.empty()) return false; // 向后找不到目标值 => 失败
                int top = st.top(); st.pop();
                inStack.erase(top);
                if (top == num) break;
            }
        }
        return true; // 整个模拟过程无障碍，则成功
    }
};