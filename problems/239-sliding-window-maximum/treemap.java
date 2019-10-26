import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.TreeMap;

/**
 * 直接用TreeMap
 * 时间：O(NlogK)
 */
class Solution {
    public int[] maxSlidingWindow(int[] nums, int k) {
        if (nums.length == 0) return new int[0];

        TreeMap<Integer, Integer> count = new TreeMap<>(new Comparator<Integer>() {
            @Override
            public int compare(Integer o1, Integer o2) {
                return o1.compareTo(o2);
            }
        });
        List<Integer> maxList = new ArrayList<>();

        int i;
        for (i = 0; i < k; ++i) {
            count.put(nums[i], count.getOrDefault(nums[i], 0) + 1);
        }
        maxList.add(count.lastKey());
        for (; i < nums.length; ++i) {
            int oldKey = nums[i - k];
            count.put(oldKey, count.get(oldKey) - 1);
            if (count.get(oldKey) == 0) count.remove(oldKey);

            int newKey = nums[i];
            count.put(newKey, count.getOrDefault(newKey, 0) + 1);

            maxList.add(count.lastKey());
        }

        int[] res = new int[maxList.size()];
        for (i = 0; i < maxList.size(); ++i) {
            res[i] = maxList.get(i);
        }
        return res;
    }
}