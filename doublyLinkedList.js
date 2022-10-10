class Node {
    constructor(value){
        this.prev = null,
        this.value = value,
        this.next = null
    }
}

class DoublyLinkedList {
    constructor(value){
        this.head = {
            prev: null,
            value: value,
            next: null
        };
        this.tail = this.head;
        this.length = 1;
    }
    append(value){
        const newNode = new Node(value);
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }
    prepend(value){
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head.prev = newNode;
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
        const follower = leader.next;
        leader.next = newNode;
        newNode.next = follower;
        newNode.prev = leader;
        follower.prev = newNode;
        this.length++;
        // console.log(this);
        return this;
    }
    traverseToIndex(index){
        let count = 0;
        let currentNode = this.head;
        while(count !== index){
            currentNode = currentNode.next;
            count++
        }
        return currentNode;
    }
    remove(index){
        const leader = this.traverseToIndex(index - 1);
        const follower = leader.next;
        let tempNode = follower.next;
        leader.next = follower.next;
        tempNode.prev = follower.prev;
        this.length--;
        console.log(this);
        return this;
    }
}

const myDoublyLinkedList = new DoublyLinkedList(10);
myDoublyLinkedList.append(20);
// myDoublyLinkedList.append(30);
myDoublyLinkedList.insert(1,15);
myDoublyLinkedList.insert(2,25);
myDoublyLinkedList.remove(1);
console.log(myDoublyLinkedList.printList());