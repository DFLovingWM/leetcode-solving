import java.util.TreeSet;

public class ContainsDuplicate3 {
    /*
     * 维护一个长度为K的TreeSet(自平衡BST)，复杂度为O(NlogK)
     */
    public boolean containsNearbyAlmostDuplicate(int[] nums, int I, int V) {
        TreeSet<Integer> treeSet = new TreeSet<>();
        for (int i = 0; i < nums.length; ++i) {
            Integer ceiling = treeSet.ceiling(nums[i] - V);
            if (ceiling != null && ceiling <= V + nums[i]) return true;

            Integer floor = treeSet.floor(nums[i] - V);
            if (floor != null && nums[i] <= V + floor) return true;

            treeSet.add(nums[i]);
            if (treeSet.size() > I) {
                treeSet.remove(nums[i - I]);
            }
        }
        return false;
    }
}
