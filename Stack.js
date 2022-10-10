class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }
    peek(){
        return this.top;
    }
    push(value){
        const newNode = new Node(value);

        if(this.length === 0){
            this.top = newNode;
            this.bottom = newNode;
        }else{
            const temp = this.top;
            this.top = newNode;
            this.top.next = temp;
        }
        this.length++;
        return this;
    }
    pop(){
        if(!this.top){
            return null;
        }
        if(this.length === 1){
            this.bottom = null;
        }
        let poppedItem = this.top;
        this.top = poppedItem.next;
        this.length--;
        return poppedItem;
    }
}

const myStack = new Stack();
myStack.push(5);
myStack.push(10);
myStack.push(15);
myStack.pop();
myStack.push(20);
myStack.pop();
myStack.pop();
myStack.pop();
console.log(myStack);