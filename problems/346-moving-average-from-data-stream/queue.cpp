/**
 * 队列：维护窗口
 * 
 * 时间：20ms
 * 空间：`O(S)`, 15.3MB
 */

class MovingAverage {
public:
    // O(1)
    MovingAverage(int size) {
        sum = 0;
        width = size;
    }
    
    // O(1)
    double next(int val) {
        Q.push(val);
        if (Q.size() > width) { // 注：if或while都一样，都只删除一个
            sum -= Q.front();
            Q.pop();
        }
        sum += val;
        return (double) sum / Q.size();
    }

private:
    int sum; // 窗口和
    int width; // 窗口宽度
    queue<int> Q; // 窗口
};