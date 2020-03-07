/**
 * 逆向推导 + 最大堆
 * 
 * 时间：O(VlogN), 60ms
 * 空间：18MB
 */

typedef long long LL;

class Solution {
public:
    bool isPossible(vector<int>& arr) {
        priority_queue<LL> Q; // 最大堆
        LL targetSum = arr.size();
        LL currSum = 0;
        for (int n : arr) {
            currSum += n;
            Q.push(n);
        }

        while (currSum > targetSum) {
            // 找出最大值，等于上一次的和
            LL currMax = Q.top();
            LL prevSum = currMax;

            // 算出上一次的最大值
            LL prevMax = prevSum - (currSum - currMax);
            if (prevMax == currMax) return false; // 死循环
            if (prevMax <= 0) return false; // 非正数（以后也不会变成正数）

            // 替换
            Q.pop();
            Q.push(prevMax);

            // 步进
            currSum = prevSum;
        }
        return currSum == targetSum;
    }
};