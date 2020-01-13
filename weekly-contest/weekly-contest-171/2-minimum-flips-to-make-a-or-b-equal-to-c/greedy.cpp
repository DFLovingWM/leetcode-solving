class Solution {
public:
    int minFlips(int a, int b, int c) {
        int res = 0;
        while (a || b || c) {
            if (!(c & 1)) { // 0 => 都要为0
                if (a & 1) ++res;
                if (b & 1) ++res;
            } else { // 1 => 随便一个为1即可
                if (!(a & 1) && !(b & 1)) ++res;
            }

            a >>= 1;
            b >>= 1;
            c >>= 1;
        }
        return res;
    }
};