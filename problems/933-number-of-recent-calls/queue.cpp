/**
 * 队列：维护一个可用队列
 * 
 * 时间：172ms
 * 空间：`O(M) <= O(3000)`, 50.1MB
 */

class RecentCounter {
public:
    // O(1)
    RecentCounter() {}
    
    // 最坏情况是O(M)
    int ping(int t) {
        Q.push(t);

        // 删除不可能再有用的头部
        while (Q.front() < t - 3000) {
            Q.pop();
        }

        return Q.size();
    }

private:
    queue<int> Q;
};