class Solution {
public:
    int removePalindromeSub(string S) {
        if (S.size() == 0) return 0;
        if (isPalindrome(S)) return 1;
        return 2;
    }

    bool isPalindrome(string S) {
        int L = 0, R = S.size() - 1;
        while (L < R) {
            if (S[L] != S[R]) return false;
            ++L;
            --R;
        }
        return true;
    }
};