//hash fucntions are basically same
//insert O(1)
//lookup O(1)
//delete O(1)
//search O(1)

// let user = {
//     age: 54,
//     name: 'kylie',
//     magic: true,
//     scream: function(){
//         return 'ahhhhh';
//     }
// }

// console.log(user.age);
// user.spell = 'abra ka dabra';

// console.log(user.scream());

// const map = new Map();
// const set = new Set();

// console.log(map);
// console.log(set);

class HashTable {
    constructor(size){
        this.data = new Array(size);
    }
//_hash means it's a private property
    _hash(key){
        let hash = 0;
        for(let i = 0; i<key.length; i++){
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
            // console.log(hash);
        }
        return hash;
    }
    
    set(key, value){
        let address = this._hash(key);
        if(!this.data[address]){
            this.data[address] = [];
        }
        this.data[address].push([key, value]);
        return this.data;
    }

    get(key){
        let address = this._hash(key);
        const currentBucket = this.data[address];
        if(currentBucket){
            for(let i=0; i<currentBucket.length; i++){
                if(currentBucket[i][0] === key){
                    return currentBucket[i][1];
                }
            }
        }
    }

    keys(){
        const keysArray = [];
        for(let i=0; i<this.data.length; i++){
            if(this.data[i]){
                keysArray.push(this.data[i][0][0])
            }
        }
        return keysArray;
        //without collision by a student
        // if (!this.data.length) {
        //     return undefined
        //   }
        //   let result = []
        //   // loop through all the elements
        //   for (let i = 0; i < this.data.length; i++) {
        //       // if it's not an empty memory cell
        //       if (this.data[i] && this.data[i].length) {
        //         // but also loop through all the potential collisions
        //         if (this.data.length > 1) {
        //           for (let j = 0; j < this.data[i].length; j++) {
        //             result.push(this.data[i][j][0])
        //           }
        //         } else {
        //           result.push(this.data[i][0])
        //         } 
        //       }
        //   }
        //   return result; 
    }
}

const myHashTable = new HashTable(50);
// myHashTable._hash('grapes');
console.log(myHashTable.set('grapes', 10000));
console.log(myHashTable.set('apples', 1000));
console.log(myHashTable.get('apples'));
console.log(myHashTable.keys());