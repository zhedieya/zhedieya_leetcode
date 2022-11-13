// https://leetcode.cn/problems/search-insert-position/
// 搜索插入位置

/**
 * 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
 * 请必须使用时间复杂度为 O(log n) 的算法。
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let n = nums.length
  let left = 0,
    right = n - 1
  while (left <= right) {
    let middle = left + Math.floor((right - left) / 2) // 注意floor向下取整
    if (nums[middle] < target) {
      left = middle + 1
    } else {
      right = middle - 1
    }
  }
  return left
}
// 1. 二分查找
// 2. 两个指针，一个左指针，一个右指针
// 3. 每次取中间值，如果中间值小于目标值，左指针移动到中间值的右边，如果中间值大于目标值，右指针移动到中间值的左边
// 4. 最后返回左指针的值
