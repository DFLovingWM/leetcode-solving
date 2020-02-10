class Solution {
public:
    int numberOfSteps (int num) {
        int res = 0;
        for (; num; ++res) {
            if (num & 1) {
                --num;
            } else {
                num >>= 1;
            }
        }
        return res;
    }
};