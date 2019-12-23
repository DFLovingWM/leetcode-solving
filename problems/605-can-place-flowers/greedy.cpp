/**
 * 贪心：
 * 如果是000，则可以在中间的0处种花。
 * 注意开头、结尾需要特殊判断。
 */

#include <vector>
using namespace std;

class Solution {
public:
    bool canPlaceFlowers(vector<int>& flowerbed, int need) {
        int count = 0;
        for (int i = 0, n = flowerbed.size(); i < n; ++i) {
            if ((i - 1 < 0 || flowerbed[i - 1] == 0) && flowerbed[i] == 0 && (i + 1 >= n || flowerbed[i + 1] == 0)) {
                ++count;
                flowerbed[i] = 1;
            }
        }
        return count >= need;
    }
};