const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l =  and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface[3, 1, 2, 3, 4, 5]
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */

function convertArrayToList(arr) {
  return arr.reverse().reduce((acc, cur) => {
    if (acc) {
      const node = new ListNode(cur);
      node.next = acc;
      return node;
    }

    return new ListNode(cur);
  }, null);
}

let list = convertArrayToList([3, 1, 2, 3, 4, 5]);
let k = 3;
//console.log (list);

function removeKFromList(list, number) {
  if (!list) return null;
  
  if (list.value === number) list = list.next;

  let currentNode = list;
  let prevNode = null;

  while(currentNode.next){
    if (currentNode.value === number) {
      prevNode.next = currentNode.next;
      currentNode = prevNode.next;
    } else {
      prevNode = currentNode;
      currentNode = currentNode.next; 
    }
  }

  return list;
}

console.log(print(list));
console.log(removeKFromList(list, k));
console.log(print(removeKFromList(list, k)))

function print(l) {
  while(l.next) {
    console.log(l.value);
    l = l.next;
  }
}


module.exports = {
  removeKFromList
};
