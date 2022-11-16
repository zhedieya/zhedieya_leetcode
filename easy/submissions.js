// https://leetcode.cn/problems/add-binary/submissions/
// 二进制求和

/**
 * 给你两个二进制字符串 a 和 b ，以二进制字符串的形式返回它们的和。
 */

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let ans = ''
  let ca = 0 //是否进位
  for (let i = a.length - 1, j = b.length - 1; i >= 0 || j >= 0; i--, j--) {
    let sum = ca // sum每次都是进位的值，相当于进位与两个字符串数据相加
    sum += i >= 0 ? parseInt(a[i]) : 0
    sum += j >= 0 ? parseInt(b[j]) : 0
    ans += sum % 2 // 如果二者都为1  那么sum%2应该刚好为0 否则为1
    ca = Math.floor(sum / 2) // 如果二者都为1  那么ca 应该刚好为1 否则为0
  }
  ans += ca == 1 ? ca : ''
  return ans.split('').reverse().join('')
}
// 1. 从后往前遍历两个字符串，长度不够的用 0 补齐
// 2. 两个字符串的当前位相加，如果有进位，那么加上进位
// 3. 如果二者都为 1，那么当前位为 0，进位为 1
//    如果二者都为 0，那么当前位为 0，进位为 0
//    如果二者有一个为 1，那么当前位为 1，进位为 0
// 4. 如果遍历完两个字符串，进位为 1，那么在结果字符串前面加上 1
