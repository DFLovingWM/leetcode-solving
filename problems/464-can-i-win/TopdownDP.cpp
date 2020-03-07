class Solution {
public:
    bool canIWin(int maxChoosableInteger, int desiredTotal) {
        n = maxChoosableInteger;
        targetSum = desiredTotal;
        return helper(0);
    }

    bool helper(int cover) {
        int sum = 0;
        
        if ()
    }

private:
    int n, targetSum;
    unordered_map<int, bool> memo;
};