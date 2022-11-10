// https://leetcode.cn/problems/palindrome-number/
// 回文数

/**
 * 给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false 。
  回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
  例如，121 是回文，而 123 不是。
 */
/**
 * @param {number} x
 * @return {boolean}
 */

var isPalindrome = function (x) {
  if (x < 0) return false
  return String(x) === String(x).split('').reverse().join('') ? true : false
}

// 不将整数转为字符串来解决这个问题
var isPalindrome = function (x) {
  if (x < 0) return false
  let temp = x
  let palindrome = 0
  while (x > 0) {
    palindrome = palindrome * 10 + (x % 10)
    x = Math.floor(x / 10) // 这里向下取整，不然上一步的x%10有小数
  }
  return temp === palindrome
}
// 通过取余%和取整/操作，获取整数的每一位数字，然后将其反转，最后比较反转后的数字和原数字是否相等，相等则为回文数
