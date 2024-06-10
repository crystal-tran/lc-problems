/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val === undefined ? 0 : val);
 *     this.next = (next === undefined ? null : next);
 * }
 */

/**
 * Reverse a sublist of a linked list between indices left and right.
 * @param {ListNode} head - The head of the linked list.
 * @param {number} left - The starting index (1-based) of the sublist to reverse.
 * @param {number} right - The ending index (1-based) of the sublist to reverse.
 * @return {ListNode} - The head of the linked list with the reversed sublist.
 */
var reverseBetween = function(head, left, right) {
    // Edge case: if the head is null or left equals right, return the list as is
    if (!head || left === right) {
        return head;
    }

    // Initialize pointers
    let prev = null; // Previous node before the sublist to be reversed
    let curr = head; // Current node as we iterate through the list

    // Move curr and prev pointers to the starting position of the sublist to be reversed
    for (let i = 1; i < left; i++) {
        prev = curr;
        curr = curr.next;
    }

    let con = prev; // con will point to the node before the reversed sublist
    let tail = curr; // tail will point to the starting node of the sublist to be reversed

    // Reverse the sublist from left to right
    for (let i = 0; i < right - left + 1; i++) {
        let next = curr.next; // Store the next node in the original list

        // Reverse the current node's pointer to point to the previous node
        curr.next = prev;

        // Move prev and curr pointers one step forward in the list
        prev = curr;
        curr = next;
    }

    // Connect the reversed sublist back into the origina
