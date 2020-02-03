typedef pair<int, int> State;

class Solution {
public:
    bool canMeasureWater(int xx, int yy, int target) {
        x = xx;
        y = yy;
        unordered_set<string> visit;
        queue<State> Q;

        Q.push({0, 0});
        visit.insert(key(0, 0));

        while (!Q.empty()) {
            auto curr = Q.front(); Q.pop();
            // 判断
            if (curr.first == target || curr.second == target || curr.first + curr.second == target) {
                return true;
            }

            // 使用给定的几种策略，扩展子结点
            for (State next : getNextStates(curr)) {
                string k = key(next.first, next.second);
                if (!visit.count(k)) {
                    visit.insert(k);
                    Q.push({ next.first, next.second });
                }
            }
        }
        return false;
    }

    vector<State> getNextStates(State s) {
        vector<State> res;
        int first = s.first, second = s.second;

        // 装满
        res.push_back({ x, second });
        res.push_back({ first, y });
        // 清空
        res.push_back({ 0, second });
        res.push_back({ first, 0 });
        // x => y
        int tmp = first + second;
        if (tmp > y) {
            res.push_back({ tmp - y, y });
        } else {
            res.push_back({ 0, tmp });
        }
        // y => x
        if (tmp > x) {
            res.push_back({ x, tmp - x });
        } else {
            res.push_back({ tmp, 0 });
        }

        // // x => y
        // int giveY = min(first, y - second);
        // if (giveY > 0) {
        //     res.push_back({ first - giveY, second + giveY });
        // }
        // // y => x
        // int giveX = min(second, x - first);
        // if (giveX > 0) {
        //     res.push_back({ first + giveX, second - giveX });
        // }

        return res;
    }

    string key(int x, int y) {
        return to_string(x) + "," + to_string(y);
    }

private:
    int x, y;
};