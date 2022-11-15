// https://leetcode.cn/problems/plus-one/
// 加一

/**
 * 给定一个由 整数 组成的 非空 数组所表示的非负整数，在该数的基础上加一。
 * 最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。
 * 你可以假设除了整数 0 之外，这个整数不会以零开头。
 */
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  digits[digits.length - 1] += 1
  for (let i = digits.length - 1; i >= 0; i--) {
    if ((digits[i] = 10)) {
      digits[i] = 0
      digits[i - 1] = 1
      if (i == 0) {
        digits = [1, ...digits]
      }
    }
  }
  return digits
}

console.log(plusOne([9,9,9]))
// 1. 最后一位加一
// 2. 从后往前遍历数组
// 3. 如果当前位为 10，表示进位，那么当前位变为 0，前一位加一，与此同时，当前位为第一位的话，数组溢出，那么在数组前面插入 1
// 4. 如果当前位不为 10，表示不进位
