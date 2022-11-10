// https://leetcode.cn/problems/two-sum/
// 两数之和

/**
 * 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
你可以按任意顺序返回答案。
*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let map = new Map()
  for (i in nums) {
    if (map.has(target - nums[i])) {
      return [map.get(target - nums[i]), i]
    } else {
      map.set(nums[i], i)
    }
  }
}
// 遍历数组，将数组的值作为key，下标作为value存入map中，如果map中存在[目标值-当前值]的值，说明存在两个数的和为target，
// 返回这两个数的下标，否则将当前值存入map中，作为下一次遍历的比对值
