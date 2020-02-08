/**
 * 题意有毒，纯粹比较即可
 * 
 * 时间：`O(NlogN)`
 */

class Solution {
public:
    int heightChecker(vector<int>& heights) {
        vector<int> rightHeights(heights);
        sort(rightHeights.begin(), rightHeights.end());

        int res = 0;
        for (int i = 0; i < heights.size(); ++i) {
            if (heights[i] != rightHeights[i]) ++res;
        }
        return res;
    }
};