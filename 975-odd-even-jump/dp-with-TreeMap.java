import java.util.TreeSet;

/**
 * O(NlogN), 149ms
 */
public class Solution {
    public int oddEvenJumps(int[] arr) {
        int n = arr.length;

        TreeSet<Integer> s1 = new TreeSet<>((i, j) -> arr[i] != arr[j] ? arr[i] - arr[j] : i - j); // 有序表（下标更小的在左边）
        TreeSet<Integer> s2 = new TreeSet<>((i, j) -> arr[i] != arr[j] ? arr[i] - arr[j] : j - i); // 有序表（下标更大的在左边）
        Integer[] greater = new Integer[n]; // 存储更大值的下标
        Integer[] smaller = new Integer[n]; // 存储更小值的下标

        // 逆序：对于每个数字，找它右边（所以要逆序）的更大/更小值（记录下标）
        for (int i = n - 1; i >= 0; --i) {
            greater[i] = s1.ceiling(i);
            smaller[i] = s2.floor(i);
            s1.add(i);
            s2.add(i);
        }

        // 逆序：动态规划（也不算太明显的DP，主要是利用已计算的结果）
        boolean[] oddJumpTo = new boolean[n];
        boolean[] evenJumpTo = new boolean[n];
        oddJumpTo[n - 1] = evenJumpTo[n - 1] = true;
        for (int i = n - 2; i >= 0; --i) {
            if (greater[i] == null) {
                evenJumpTo[i] = false;
            } else {
                evenJumpTo[i] = oddJumpTo[greater[i]];
            }

            if (smaller[i] == null) {
                oddJumpTo[i] = false;
            } else {
                oddJumpTo[i] = evenJumpTo[smaller[i]];
            }
        }

        // 找结果
        int res = 0;
        for (int i = 0; i < n; ++i) {
            if (evenJumpTo[i]) { // 从i出发首先是odd jump，所以前一跳是even jump
                ++res;
            }
        }
        return res;
    }
}
