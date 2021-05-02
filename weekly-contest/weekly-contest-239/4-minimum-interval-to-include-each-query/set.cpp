using Range = vector<int>;

class Solution {
public:
    vector<int> minInterval(vector<Range>& intervals, vector<int>& queries) {
        const int Q = queries.size();

        // qi 表示询问下标，坐标更小的先询问
        vector<int> qi(Q);
        for (int i = 0; i < Q; ++i) {
          qi[i] = i;
        }
        sort(qi.begin(), qi.end(), [&](int i, int j) {
            return queries[i] < queries[j];
        });

        // 区间排序
        sort(intervals.begin(), intervals.end());

        // 有序表。元素格式：{左边界, 右边界}
        auto cmp = [&](auto &A, auto &B) {
            return (A[1] - A[0] < B[1] - B[0]) || // 1. 长度更小的优先
                A[1] < B[1]; // 2. 右边界更小的优先
        };
        set<Range, decltype(cmp)> s(cmp);
        vector<int> res(Q, -1);
        int j = 0;
        const int n = intervals.size();
        for (int i : qi) {
            const int x = queries[i];

            // 合法解（保证 s 中的区间都包含 x）
            // 1. 左边界满足的，加入
            for (; j < n && intervals[j][0] <= x; ++j) {
                s.insert({ intervals[j][0], intervals[j][1] });
            }
            // 2. 右边界不满足的，删除
            // 对应上面 set 的排序标准 2
            while (!s.empty() && (*s.begin())[1] < x) {
                s.erase(s.begin());
            }

            // 最优解
            if (!s.empty()) {
                res[i] = getLength(*s.begin());
            }
        }
        return res;
    }
private:
    int getLength(Range interval) {
        return interval[1] - interval[0] + 1;
    }
};