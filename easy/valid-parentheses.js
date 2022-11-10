// https://leetcode.cn/problems/valid-parentheses/
// 有效的括号

/**
 * 
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
*  有效字符串需满足：
      左括号必须用相同类型的右括号闭合。
      左括号必须以正确的顺序闭合。
      每个右括号都有一个对应的相同类型的左括号。
*/
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = []
  let map = {
    ')': '(',
    '}': '{',
    ']': '[',
  }
  for (const str of s) {
    if (str in map) {
      if (stack.pop() !== map[str]) {
        return false
      }
    } else {
      stack.push(str)
    }
  }
  return stack.length === 0
}
// 辅助栈法
// 遍历字符串，如果当前字符是左括号，则将其压入栈中，如果当前字符是右括号，则将栈顶元素弹出，
// 如果弹出的元素不是与当前括号匹配的左括号，则返回false，否则继续遍历，如果遍历结束后，栈为空，说明匹配成功，返回true，否则返回false
