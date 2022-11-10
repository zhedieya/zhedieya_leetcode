// https://leetcode.cn/problems/longest-common-prefix/
// 最长公共前缀

/**
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 * 如果不存在公共前缀，返回空字符串 ""。
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return ''
  let fStr = strs[0]
  for (let str of strs) {
    while (!str.startsWith(fStr)) {
      fStr = fStr.substring(0, fStr.length - 1)
    }
  }
  return fStr
}
// 随机去一个字符串(这里是取第一个，然后遍历数组，如果数组中的字符串不是以这个字符串开头的，
// 就把这个字符串的最后一个字符去掉，然后继续判断，直到数组中的字符串都是以这个字符串开头的，就返回这个字符串
