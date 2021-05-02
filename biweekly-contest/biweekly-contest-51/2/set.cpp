/**
 * 操作有：
 * 1. getMin
 * 2. removeMin
 * 3. add
 * 最快是有序表
 */
class SeatManager {
public:
    SeatManager(int n) {
        for (int i = 1; i <= n; ++i) {
            seats.insert(i);
        }
    }

    int reserve() {
        int res = *seats.begin();
        seats.erase(res);
        return res;
    }
    
    void unreserve(int seatNumber) {
        seats.insert(seatNumber);
    }
private:
    set<int> seats;
};