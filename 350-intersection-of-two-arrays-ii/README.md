# 350. 求交集

基本思路同349。但在相同数字出现时，需要继续匹配，而不是直接去重：

- Hash
- Binary search
- Two pointers

多了几个思考题：

- What if the given array is already sorted? How would you optimize your algorithm?

用Two pointers法：利用了有序的前提，并且指针比较的过程只需O(N)，比binary search更快

- What if nums1's size is small compared to nums2's size? Which algorithm is better?

用Hash法：只对nums1建立表（因为nums1更小，hashmap占用空间会更小），然后遍历nums2。

- What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?

Hash：加载nums1全部到内存，并建立hash。

[External sort](https://leetcode.com/problems/intersection-of-two-arrays-ii/discuss/82243/Solution-to-3rd-follow-up-question)对两者排序。然后使用two-pointer，每次从2个数组中只load进一个数字进行判断。
