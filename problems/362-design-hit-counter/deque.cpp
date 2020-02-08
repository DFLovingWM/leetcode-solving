/**
 * 双端队列：维护可用窗口
 * 
 * 时间：0ms
 * 空间：9.3MB
 */

class HitCounter {
public:
    HitCounter() {
        sum = 0;
    }
    
    void hit(int timestamp) {
        ++sum;
        if (!D.empty() && D.back().first == timestamp) {
            ++D.back().second;
        } else {
            D.push_back({ timestamp, 1 });
        }
    }

    int getHits(int timestamp) {
        // 移除旧头部（左边界右移）
        while (!D.empty() && D.front().first <= timestamp - 300) {
            sum -= D.front().second;
            D.pop_front();
        }

        return sum;
    }

private:
    int sum;
    deque<pair<int, int>> D; // 每个元素为：{ 数字, 频次 }
};