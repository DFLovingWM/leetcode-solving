struct member
{
    long coins;
    long subCoins;
    int leader;
    int allSubMembers;
    vector<int> subMember;
};

class Solution
{
public:
    vector<int> bonus(int n, vector<vector<int>> &leadership, vector<vector<int>> &operations)
    {
        vector<member> memberList(n, {0, 0, -1, 0, {}});
        vector<int> result;
        int mod = 1000000007;
        // 建树，双向
        for (auto &v : leadership)
        {
            memberList[v[0] - 1].subMember.push_back(v[1] - 1);
            memberList[v[1] - 1].leader = v[0] - 1;
        }
        // 递归统计子节点数
        countSub(memberList);
        for (auto &v : operations)
        {
            member *temp = nullptr;
            int tatal = 0;
            switch (v[0])
            {
            case 1:
                temp = &memberList[v[1] - 1];
                temp->coins += v[2];
                // 上访，添加subCoins
                // 若只有一次查询操作，其实是没必要存储subCoins的
                // 因为查的时候遍历一次就可以了...不过明显本题不是这样
                while (temp->leader != -1)
                {
                    temp = &memberList[temp->leader];
                    temp->subCoins += v[2];
                }
                break;
            case 2:
                temp = &memberList[v[1] - 1];
                temp->coins += v[2];
                for (auto &m : temp->subMember)
                    sendCoin(memberList, m, v); // 深度优先遍历，更新coins、subCoins
                tatal = v[2] * (temp->allSubMembers + 1);
                temp->subCoins += tatal - v[2];
                while (temp->leader != -1)
                {
                    temp = &memberList[temp->leader];
                    temp->subCoins += tatal;
                }
                break;
            case 3:
                temp = &memberList[v[1] - 1];
                result.push_back((temp->coins + temp->subCoins) % mod);
            default:
                break;
            }
        }
        return result;
    }

    int countSub(vector<member> &memberList, const int &current = 0)
    {
        int num = 0;
        auto &temp = memberList[current];
        for (auto &v : temp.subMember)
            num += countSub(memberList, v);
        temp.allSubMembers = num + temp.subMember.size();
        return temp.allSubMembers;
    }

    void sendCoin(vector<member> &memberList, const int &current, const vector<int> &operation)
    {
        auto &m = memberList[current];
        m.coins += operation[2];
        for (auto &sub : m.subMember)
            sendCoin(memberList, sub, operation);
        m.subCoins += m.allSubMembers * operation[2];
    }
};