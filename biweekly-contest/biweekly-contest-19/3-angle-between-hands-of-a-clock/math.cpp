class Solution {
public:
    double angleClock(int h, int m) {
        double res = abs((h + (double) m / 60) - ((double) m / 5)) * 30;
        return min(res, 360 - res);
    }
};