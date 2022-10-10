class Stack {
    constructor(){
        this.array = new Array();
    }
    peek(){
        return this.array[this.array.length - 1];
    }
    push(value){
        this.array.push(value);
        return this;
    }
    pop(){
        let poppedItem = this.array.pop();
        return poppedItem;
    }
}

const myStack = new Stack;
myStack.push('goggle');
console.log(myStack.pop());
console.log(myStack);