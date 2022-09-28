// let map = {};

// for(let i =0; i<10; i++){
//     map[i] = 1;
// }
// for(let i =0; i<10; i++){
//     if(map[i] === 5) console.log('understood')
//     else console.log('not understood')
// }
// console.log(map);
let str = new Array('a', 'b', 'c', 'd');

//push
str.push('e');  //O(1)
str.push('f');
// console.log(str);

//pop
str.pop();      //O(1)
// console.log(str);

//unshift
str.unshift('a');   //O(n)
// console.log(str);

//add element on any index
// str.splice(2, 1, 'z');  //O(n)
// console.log(str);

//create a new sub array
let newStr = str.slice(2, 4);
console.log(newStr, str); 