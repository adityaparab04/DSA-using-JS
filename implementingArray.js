class MyArray {
    constructor(){
        this.length = 0;
        this.data = {};
    }
    get(index){
        return this.data[index];
    }
    push(item){
        this.data[this.length] = item;
        this.length++;
        return this.length
    }
    pop(){
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }
    delete(index){
        const item = this.data[index];
        this.shiftIems(index);
        return item;
    }
    shiftIems(index){
        for(let i=index; i<this.length -1; i++){
            this.data[i] = this.data[i+1];
        }
        delete this.data[this.length - 1];
        this.length--;
    }
}

newArray = new MyArray();
newArray.push('apple');
newArray.push('banana');
newArray.push('cherry');
newArray.pop();
newArray.push('fruits');
newArray.push('dinner');
newArray.delete(2);
console.log(newArray);