// https://leetcode.cn/problems/balanced-binary-tree/
/**
 * 给定一个二叉树，判断它是否是高度平衡的二叉树。
 * 本题中，一棵高度平衡二叉树定义为：
 * 一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  // 记录二叉树是否平衡
  let flag = true
  const maxDepth = (root) => {
    if (root == null) return 0
    // 提前返回
    if (!flag) return
    let leftMaxDepth = maxDepth(root.left)
    let rightMaxDepth = maxDepth(root.right)
    // 如果左右最大深度大于 1，就不是平衡二叉树
    if (Math.abs(rightMaxDepth - leftMaxDepth) > 1) {
      flag = false
    }
    return 1 + Math.max(leftMaxDepth, rightMaxDepth)
  }
  maxDepth(root)
  return flag
}
// 1. 递归
// 2. 记录二叉树是否平衡
// 3. 计算左右子树的最大深度
// 4. 如果左右最大深度大于 1，就不是平衡二叉树
// 5. 递归计算左右子树的最大深度
