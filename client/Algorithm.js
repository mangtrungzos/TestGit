/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    
    let carry = 0 ; 
    let previousNode = new ListNode(); 
    let headNode = previousNode ;

    while (l1 || l2 || carry) // we need to iterate the linked list until one of the list has become empty and if there is a number inside our carry
    {
        let val1 = 0 ; 
        let val2 = 0 ; 

        if(l1){ // here im checking whether li is empty or not if it will be empty it would not enter the loop 
            val1 = l1.val; // now im storing the first value of l1 in val1 for first iteration and so on 
            l1 = l1.next; // moving the node to next node
            
        }
        if(l2) // here im checking whether l2 is empty or not if it will be empty it would not enter the loop
        {
            val2 = l2.val ; // storing the value of the first value of l2 in val2 for the first iteration and so on
            l2 = l2.next ;  // move the node to next node
        }
        let sum = val1 + val2 + carry; // ive declared the var carry above as we need to check wheter the sum of the values is greater than 9 or not if it is then we will carry the tenth digit of the sum of the two values

        carry = (sum > 9) ? 1 : 0 ; // checking the sum with ternary operator 

        let digit = (sum % 10); // checking the digit if the digit is < 9 then it should be printed as it is and if not then the once place digit should be displayed in the out put


        const currentNode = new ListNode(digit);
        previousNode.next = currentNode;
        previousNode = currentNode;

    }

    return headNode.next;
    
};


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

