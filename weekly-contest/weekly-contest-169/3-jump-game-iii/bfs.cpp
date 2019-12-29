#include <vector>
#include <queue>
#include <unordered_set>
using namespace std;

class Solution {
public:
    bool canReach(vector<int>& arr, int start) {
        queue<int> que;
        unordered_set<int> visit;

        que.push(start);
        visit.insert(start);

        while (!que.empty()) {
            int i = que.front(); que.pop();
            if (arr[i] == 0) return true;

            // 右
            int right = i + arr[i];
            if (!visit.count(right) && right < arr.size()) {
                que.push(right);
                visit.insert(right);
            }
            // 左
            int left = i - arr[i];
            if (!visit.count(left) && left >= 0) {
                que.push(i - arr[i]);
                visit.insert(left);
            }
        }

        return false;
    }
};