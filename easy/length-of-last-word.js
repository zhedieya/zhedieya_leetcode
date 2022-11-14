// https://leetcode.cn/problems/length-of-last-word/
// 最后一个单词的长度

/**
 * 给你一个字符串 s，由若干单词组成，单词前后用一些空格字符隔开。返回字符串中 最后一个 单词的长度。
 * 单词 是指仅由字母组成、不包含任何空格字符的最大子字符串。
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  const reg = /\s+/g
  let arr = s.split(reg)
  arr = arr.filter((item) => item !== '')
  return arr[arr.length - 1].length
}
// 1. 正则匹配空格
// 2. 用空格分割字符串
// 3. 过滤空字符串
// 4. 返回最后一个字符串的长度
