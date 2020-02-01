/*
class Employee {
public:
    int id;
    int importance;
    vector<int> subordinates;
};
*/

/**
 * 树的遍历（DFS）
 * 
 * 时间：`O(N)`, 32ms
 */

class Solution {
public:
    int getImportance(vector<Employee*> employees, int id) {
        // 建立映射（id => 对象）
        for (auto employee : employees) {
            id2Imp[employee->id] = employee;
        }

        // 找起点
        Employee* root = NULL;
        for (auto employee : employees) {
            if (employee->id == id) {
                root = employee;
                break;
            }
        }

        return dfs(root);
    }

    int dfs(Employee* node) {
        if (!node) return 0;
        
        int res = node->importance;
        for (auto subordinate : node->subordinates) {
            res += dfs(id2Imp[subordinate]);
        }
        return res;
    }

private:
    unordered_map<int, Employee*> id2Imp;
};