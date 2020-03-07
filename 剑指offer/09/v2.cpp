/**
 * 两个stack
 * 
 * 时间：372ms
 * 空间：O(N), 98.1MB
 */

class CQueue {
public:
    CQueue() {}
    
    // T(1)
    void appendTail(int value) {
        first.push(value);
    }
    
    // T(1) or T(N)
    int deleteHead() {
        if (second.empty()) { // second为空，表示元素是栈序 => 需要O(N)时间倒出来
            if (first.empty()) return -1;
            while (!first.empty()) {
                second.push(first.top()); first.pop();
            }
        }
        int res = second.top(); second.pop();
        return res;
    }

private:
    stack<int> first, second;
};