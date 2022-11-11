// https://leetcode.cn/problems/remove-duplicates-from-sorted-array/
// 删除排序数组中的重复项

/**
 * 给你一个 升序排列 的数组 nums ，请你 原地 删除重复出现的元素，使每个元素 只出现一次 ，返回删除后数组的新长度。元素的 相对顺序 应该保持 一致 。
  由于在某些语言中不能改变数组的长度，所以必须将结果放在数组nums的第一部分。更规范地说，如果在删除重复项之后有 k 个元素，那么 nums 的前 k 个元素应该保存最终结果。
  将最终结果插入 nums 的前 k 个位置后返回 k 。
  不要使用额外的空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  const n = nums.length
  if (n == 0) return 0
  let fast = 1,
    slow = 1
  while (fast < n) {
    if (nums[fast] !== nums[fast - 1]) {
      nums[slow] = nums[fast]
      slow++
    }
    fast++
  }
  return slow
}
/**
 * 快慢指针法
 * 1. 两个指针，一个快指针，一个慢指针
 * 2. 快指针遍历数组，慢指针记录不重复的元素
 * 3. 快指针遇到不重复的元素，慢指针向前移动一位，将快指针的元素赋值给慢指针
 * 4. 快指针遍历完数组，慢指针指向的位置就是不重复元素的个数
 * 5. 由于题目要求原地修改数组，所以慢指针之后的元素可以不用管
 * 6. 由于题目要求返回不重复元素的个数，所以返回慢指针的值
 */
