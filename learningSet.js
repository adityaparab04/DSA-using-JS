// set function in javascript

const set = new Set();
console.log(set);

set.add(3);
set.add('aditya');
set.add(1, 'aditya'); //only one unique term can be input
console.log(set);

set.delete(3);
console.log(set);

let obj = {1:'a', 2:'b'}
set.add(obj);
console.log(set);

console.log(set.has('aditya'));
console.log(set.size);

set.clear();
console.log(set);

const numbers = [2,3,4,4,2,3,3,4,4,5,5,6,6,7,5,32,3,4,5,12]

let numbers2 = new Set(numbers);

console.log(numbers2);

let x ='AdityA';
console.log(new Set(x));

