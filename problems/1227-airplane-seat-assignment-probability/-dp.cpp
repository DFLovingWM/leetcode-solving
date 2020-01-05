class Solution {
public:
    double nthPersonGetsNthSeat(int N) {
        n = N;
        cache = vector<double>(n, -1);
        return helper(0);
    }

    // 当前是第`i`个人选位置、对应最终第`n`个人坐对位置的概率
    double helper (int i) {
        if (i == n - 1) return 1 / n;
        if (cache[i] != -1) return cache[i];

        double unit = 1 / (n - i);
        double res = unit; // i坐在自己的位置（或坐在占据者的位置）
        for (int j = i + 1; j <= n - 1; ++j) { // i坐除n以外的位置`j`
            res += unit * helper(j);
        }
        return cache[i] = res;
    }

private:
    int n;
    vector<double> cache;
};