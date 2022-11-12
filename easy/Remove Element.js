// https://leetcode.cn/problems/remove-element/
// 移除元素

/**
 * 
 * 给你一个数组 nums 和一个值 val，你需要 原地 移除所有数值等于 val 的元素，并返回移除后数组的新长度。
  不要使用额外的数组空间，你必须仅使用 O(1) 额外空间并 原地 修改输入数组。
  元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素
 */

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// 双指针优化
var removeElement = function (nums, val) {
  let n = nums.length
  if (n === 0) return 0
  let left = 0,
    right = n
  while (left < right) {
    if (nums[left] === val) {
      nums[left] = nums[right - 1]
      right--
    } else {
      left++
    }
  }
  return left
}
// 1. 两个指针，一个左指针，一个右指针
// 2. 左指针遇到val，就把右指针的值赋值给左指针，右指针减一
// 3  如果赋值过来的元素恰好也等于 val，可以继续把右指针 right 指向的元素的值赋值过来
// 4. 如果不等于，左指针加一
// 5. 最后返回左指针的值
