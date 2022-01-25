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

    _hash(key){
        let hash = 0;
        for(let i = 0; i<key.length; i++){
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
            console.log(hash);
        }
        return hash;
    }
}

const myHashTable = new HashTable(50);
myHashTable._hash('11');