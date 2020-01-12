/**
 * 贪心：检测每两个人，如果(x,y)不是情侣则将x的情侣与y互换
 * 
 * 时间：`O(N)`, 4ms
 */

#include <vector>
#include <functional>
using namespace std;

class Solution {
public:
    int minSwapsCouples(vector<int>& row) {
        const int n = row.size(), p = n / 2;

        vector<int> man2Seat(n, -1); // 人 => 座位（反向映射）
        for (int i = 0; i < n; ++i) {
            man2Seat[row[i]] = i;
        }

        // 交换座位（维护`row`和`man2Seat`两个映射）
        function<void(int, int)> swapSeat = [&](int xPerson, int yPerson) {
            int xSeat = man2Seat[xPerson];
            int ySeat = man2Seat[yPerson];
            swap(man2Seat[xPerson], man2Seat[yPerson]);
            swap(row[xSeat], row[ySeat]);
        };

        int res = 0;
        for (int i = 0; i < p; ++i) { // 检查每两个
            int x = row[i * 2];
            int y = getPartner(x); // 理想
            int yy = row[i * 2 + 1]; // 现实

            // 如果不是情侣，则将y与yy互换
            if (yy != y) {
                ++res;
                swapSeat(y, yy);
            }
        }
        return res;
    }

    int getPartner(int x) {
        return (x & 1) ? x - 1 : x + 1;
    }

    void swap(int &x, int &y) {
        int tmp = x;
        x = y;
        y = tmp;
    }
};