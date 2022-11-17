// https://leetcode.cn/problems/sqrtx/
// x 的平方根

/**
 * 给你一个非负整数 x ，计算并返回 x 的 算术平方根 。
 * 由于返回类型是整数，结果只保留 整数部分 ，小数部分将被 舍去 。
 * 注意：不允许使用任何内置指数函数和算符，例如 pow(x, 0.5) 或者 x ** 0.5 。
 */

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let left = 0
  let right = x
  while (left <= right) {
    let mid = left + ((right - left) >> 1) //中间位置索引   x>>1 表示除以2并取整，缩小一下遍历的范围
    if (mid * mid <= x) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  return right
}
// 二分查找，找到最后一个小于等于 x 的平方根

