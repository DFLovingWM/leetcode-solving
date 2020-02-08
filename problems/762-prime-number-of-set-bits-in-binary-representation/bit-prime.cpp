/**
 * 位运算 + 素数
 */

class Solution {
public:
    int countPrimeSetBits(int L, int R) {
        calcPrimes(32);

        int res = 0;
        for (int i = L; i <= R; ++i) {
            int cnt = 0;
            for (int n = i; n; n >>= 1) {
                if (n & 1) ++cnt;
            }
            if (prime[cnt]) ++res; // 如果有素数个1，就累加
        }
        return res;
    }

    // 求素数：埃氏筛法
    void calcPrimes(int maxn) {
        prime = vector<bool>(maxn + 1, true);
        prime[0] = prime[1] = false;
        for (int i = 2; i <= maxn; ++i) {
            if (prime[i]) {
                for (int j = i + i; j <= maxn; j += i) {
                    prime[j] = false;
                }
            }
        }
    }

private:
    vector<bool> prime;
};