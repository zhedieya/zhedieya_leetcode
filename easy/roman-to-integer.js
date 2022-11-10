// https://leetcode.cn/problems/roman-to-integer
// 罗马数字转整数

/**
 * 罗马数字包含以下七种字符: I， V， X， L，C，D 和 M。
    字符          数值
    I             1
    V             5
    X             10
    L             50
    C             100
    D             500
    M             1000
例如， 罗马数字 2 写做 II ，即为两个并列的 1 。12 写做 XII ，即为 X + II 。 27 写做  XXVII, 即为 XX + V + II 。
通常情况下，罗马数字中小的数字在大的数字的右边。但也存在特例，例如 4 不写做 IIII，而是 IV。数字 1 在数字 5 的左边，所表示的数等于大数 5 减小数 1 得到的数值 4 。同样地，数字 9 表示为 IX。这个特殊的规则只适用于以下六种情况：
I 可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9。
X 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。 
C 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900。
给定一个罗马数字，将其转换成整数。
 */
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const map = new Map()
  map.set('I', 1)
  map.set('V', 5)
  map.set('X', 10)
  map.set('L', 50)
  map.set('C', 100)
  map.set('D', 500)
  map.set('M', 1000)
  let res = 0
  for (let i = 0; i < s.length; i++) {
    let cur = map.get(s[i])
    if (cur < map.get(s[i + 1])) {
      res -= cur
    } else {
      res += cur
    }
  }
  return res
}
// 通常情况下，罗马数字中小的数字在大的数字的右边。若输入的字符串满足该情况，那么可以将每个字符视作一个单独的值，累加每个字符对应的数值即可。
// 若存在小的数字在大的数字的左边的情况，根据规则需要减去小的数字。对于这种情况，我们也可以将每个字符视作一个单独的值，若一个数字右侧的数字比它大，则将该数字的符号取反。
