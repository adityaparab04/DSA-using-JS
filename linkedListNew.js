//difference between array and linked list is traversal
//it is same as iterating but it is little slower than array, but inserting in between is much better
//hash table you cannot add in between

class Node {
    constructor(value){
        this.value = value,
        this.next = null
    }
}

class LinkedList {
    constructor(value){
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }
    append(value){
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }
    prepend(value){
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }
    printList(){
        const array = new Array();
        let currentNode = this.head;
        while(currentNode !== null){
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }
    insert(index, value){
        //check parameters
        if(index >= this.length){
            return this.append(value);
        }
        const newNode = new Node(value);
        const leader = this.traverseToIndex(index-1);
        const tempNode = leader.next;
        leader.next = newNode;
        newNode.next = tempNode;
        this.length++;
        return this;
    }
    traverseToIndex(index){
        let currentNode = this.head;
        let counter = 0;
        while(counter !== index){
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }
    remove(index){
        let leader = this.traverseToIndex(index-1);
        let tempNode = leader.next;
        leader.next = tempNode.next;
        this.length--;
        return this;
    }
    reverse(){
        if(!this.head.next){
            return this.head;
        }
        let first = this.head;
        this.tail = this.head;
        let second = first.next;
        while(second){
            const temp = second.next;
            second.next = first;
            first = second;
            second = temp;
        }
        this.head.next = null;
        this.head = first;
        return this;
    }
}
const myLinkedList = new LinkedList(10);
myLinkedList.append(15);
myLinkedList.append(20);
myLinkedList.prepend(5);
myLinkedList.prepend(1);
console.log(myLinkedList.printList());
// myLinkedList.remove(3);
myLinkedList.reverse();
console.log(myLinkedList.printList());