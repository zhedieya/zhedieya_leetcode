// https://leetcode.cn/problems/minimum-depth-of-binary-tree/

/**
 * 给定一个二叉树，找出其最小深度。
 * 最小深度是从根节点到最近叶子节点的最短路径上的节点数量。
 * 说明：叶子节点是指没有子节点的节点。
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
 * @return {number}
 */
var minDepth = function (root) {
  if (root == null) return 0
  else if (root.left == null) {
    return minDepth(root.right) + 1
  } else if (root.right == null) {
    return minDepth(root.left) + 1
  } else {
    return Math.min(minDepth(root.left), minDepth(root.right)) + 1
  }
}

// 1. 如果根节点为空，返回 0
// 2. 如果左子树为空，往右子树找
// 3. 如果右子树为空，往左子树找
// 4. 如果左右子树都不为空，往左右子树中最小的深度找
