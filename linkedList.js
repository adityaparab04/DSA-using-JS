//arrays
const basket = ['apples', 'bananas', 'pears'];
//list 
//10 --> 5 --> 16
// let myLinkedList = {
//     head: {
//         value: 10,
//         next: {
//             value: 5,
//             next: {
//                 value: 16,
//                 next:  null
//             }
//         }
//     }
// }

class Node {
    constructor(value){
        this.value = value,
        this.next = null
    }
}

class linkedList {
    constructor(value){
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }
    append(value){
        const newNode = new Node(value)
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }
    prepend(value){
        const newNode = new Node(value)
        newNode.next = this.head;
        this.head = newNode
        this.length++;
    }

}

const myLinkedList = new linkedList(10);
myLinkedList.append(16);
myLinkedList.append(1);
myLinkedList.prepend(5);
console.log(myLinkedList)