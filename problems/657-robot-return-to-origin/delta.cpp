/**
 * 计数：左右抵消、上下抵消，看最终delta是否为0
 * 
 * 时间：`O(N)`, 20ms
 */

class Solution {
public:
    bool judgeCircle(string moves) {
        int ve = 0, ho = 0;
        for (char move : moves) {
            // 水平方向
            if (move == 'L') {
                --ho;
            } else if (move == 'R') {
                ++ho;
            }
            // 竖直方向
            if (move == 'U') {
                --ve;
            } else if (move == 'D') {
                ++ve;
            }
        }
        return ve == 0 && ho == 0;
    }
};