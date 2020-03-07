/**
 * 临时stack
 * 
 * 时间：568ms
 * 空间：O(N), 206.5MB
 */

class CQueue {
public:
    CQueue() {}
    
    // T(1)
    void appendTail(int value) {
        st.push(value);
    }
    
    // T(N)
    int deleteHead() {
        if (st.empty()) return -1;

        // 倒
        stack<int> tmp;
        while (!st.empty()) {
            tmp.push(st.top()); st.pop();
        }
        // 取
        int res = tmp.top(); tmp.pop();
        // 恢复
        while (!tmp.empty()) {
            st.push(tmp.top()); tmp.pop();
        }
        return res;
    }

private:
    stack<int> st;
};