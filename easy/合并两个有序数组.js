// https://leetcode.cn/problems/merge-sorted-array/
/**
 * 给你两个按 非递减顺序 排列的整数数组 nums1 和 nums2，另有两个整数 m 和 n ，分别表示 nums1 和 nums2 中的元素数目。
 * 请你 合并 nums2 到 nums1 中，使合并后的数组同样按 非递减顺序 排列。
 * 注意：最终，合并后数组不应由函数返回，而是存储在数组 nums1 中。为了应对这种情况，nums1 的初始长度为 m + n，其中前 m 个元素表示应合并的元素，后 n 个元素为 0 ，应忽略。nums2 的长度为 n
 */
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// var merge = function(nums1, m, nums2, n) {
//     // nums1.splice(m,n,...nums2).sort((a,b)=>a-b)  // 连续调用就不行
//      nums1.splice(m,n,...nums2);
//      nums1.sort((a,b) => a-b);
// };
var merge = function (nums1, m, nums2, n) {
  let p1 = m - 1,
    p2 = n - 1,
    tail = m + n - 1
  while (p2 >= 0) {
    if (p1 < 0 || nums1[p1] <= nums2[p2]) {
      nums1[tail--] = nums2[p2--]
    } else {
      nums1[tail--] = nums1[p1--]
    }
  }
}
// 1. 从后往前遍历，比较两个数组的最后一个元素，谁大就放到nums1的最后一个位置
// 2. 如果nums1的元素大，nums1的指针向前移动，如果nums2的元素大，nums2的指针向前移动
// 3. 如果nums1的指针小于0，说明nums1的元素已经遍历完了，直接把nums2的元素放到nums1的前面
