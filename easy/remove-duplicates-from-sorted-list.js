// https://leetcode.cn/problems/remove-duplicates-from-sorted-list/
// // 删除排序链表中的重复元素

/**
 * 给定一个已排序的链表的头 head ， 删除所有重复的元素，使每个元素只出现一次 。返回 已排序的链表 。
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  if (!head) return head
  let cur = head
  while (cur.next) {
    if (cur.val === cur.next.val) {
      cur.next = cur.next.next
    } else {
      cur = cur.next // 继续往下走
    }
  }
  return head
}
// let cur = head
// cur只是一个引用类型的变量，相当于一个内存指针，这里的head也是一个指针，它指向的是链表开始位置的内存，
// 让cur = head，表示cur和head指向了同一块内存，也就是说这俩指针都存储了相同的内存地址，如果直接操作head，
// 那么就丢失了链表起始位置的内存地址，测试程序就没办法从头开始遍历链表了，所以需要使用cur来遍历链表，同时直接对指向的内存数据进行操作，
// 这样返回的head仍然指向链表开始位置的内存，而这个链表其实已经使用cur这个指针进行了修改了。

// 1. 遍历链表，如果当前节点的值等于下一个节点的值，就把当前节点的 next 指向下下个节点，相当于跳过了下一个节点
// 2. 如果当前节点的值不等于下一个节点的值，就把当前节点指向下一个节点，继续往下走
